defmodule App.Endpoint do
  use GRPC.Endpoint

  intercept GRPC.Logger.Server
  run App.User.Server
end

defmodule App.User.Server do
  use GRPC.Server, service: App.User.Service

  def create(request, _stream) do
    new_user =
      UserDB.add_user(%{
        first_name: request.first_name,
        last_name: request.last_name,
        age: request.age
      })

    App.UserReply.new(new_user)
  end

  def get(request, _stream) do
    user = UserDB.get_user(request.id)

    if user == nil do
      raise GRPC.RPCError, status: :not_found
    else
      App.UserReply.new(user)
    end
  end
end