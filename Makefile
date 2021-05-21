build:
	$(MAKE) -C server build

proto_gen:
	$(MAKE) -C server proto_gen

web:
	yarn --cwd "grpc-example" dev

node_proto:
	grpc-example/node_modules/.bin/proto-loader-gen-types \
		--longs=String \
		--enums=String \
		--defaults \
		--oneofs \
		--grpcLib=@grpc/grpc-js \
		--outDir=grpc-example/grpc/proto/ protobufs/*.proto
