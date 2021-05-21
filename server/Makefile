build:
	install_deps
	proto_gen
	
install_deps:
	mix deps.get

proto_gen:
	protoc --elixir_out=plugins=grpc:./lib app.proto
