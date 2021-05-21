build: install_deps proto_gen
	
install_deps:
	mix deps.get

proto_gen:
	protoc --proto_path=./../protobufs --elixir_out=plugins=grpc:./lib app.proto
