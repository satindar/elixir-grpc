build:
	$(MAKE) -C server build

proto_gen:
	$(MAKE) -C server proto_gen

web:
	yarn --cwd "grpc-example" dev