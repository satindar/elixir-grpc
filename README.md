# Elixir + gRPC Example App

- `https://blog.appsignal.com/2020/03/24/how-to-use-grpc-in-elixir.html`

- `brew install protobuf`
- `brew install grpcurl`
- `brew install elixir`
- `mix escript.install hex protobuf`

- `mix deps.get`

- `protoc --elixir_out=plugins=grpc:./lib ./../protobufs/app.proto`

- `mix grpc.server`
