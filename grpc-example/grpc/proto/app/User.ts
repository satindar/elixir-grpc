// Original file: protobufs/app.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { CreateRequest as _app_CreateRequest, CreateRequest__Output as _app_CreateRequest__Output } from '../app/CreateRequest';
import type { GetRequest as _app_GetRequest, GetRequest__Output as _app_GetRequest__Output } from '../app/GetRequest';
import type { UserReply as _app_UserReply, UserReply__Output as _app_UserReply__Output } from '../app/UserReply';

export interface UserClient extends grpc.Client {
  Create(argument: _app_CreateRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _app_UserReply__Output) => void): grpc.ClientUnaryCall;
  Create(argument: _app_CreateRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _app_UserReply__Output) => void): grpc.ClientUnaryCall;
  Create(argument: _app_CreateRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _app_UserReply__Output) => void): grpc.ClientUnaryCall;
  Create(argument: _app_CreateRequest, callback: (error?: grpc.ServiceError, result?: _app_UserReply__Output) => void): grpc.ClientUnaryCall;
  create(argument: _app_CreateRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _app_UserReply__Output) => void): grpc.ClientUnaryCall;
  create(argument: _app_CreateRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _app_UserReply__Output) => void): grpc.ClientUnaryCall;
  create(argument: _app_CreateRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _app_UserReply__Output) => void): grpc.ClientUnaryCall;
  create(argument: _app_CreateRequest, callback: (error?: grpc.ServiceError, result?: _app_UserReply__Output) => void): grpc.ClientUnaryCall;
  
  Get(argument: _app_GetRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _app_UserReply__Output) => void): grpc.ClientUnaryCall;
  Get(argument: _app_GetRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _app_UserReply__Output) => void): grpc.ClientUnaryCall;
  Get(argument: _app_GetRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _app_UserReply__Output) => void): grpc.ClientUnaryCall;
  Get(argument: _app_GetRequest, callback: (error?: grpc.ServiceError, result?: _app_UserReply__Output) => void): grpc.ClientUnaryCall;
  get(argument: _app_GetRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _app_UserReply__Output) => void): grpc.ClientUnaryCall;
  get(argument: _app_GetRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _app_UserReply__Output) => void): grpc.ClientUnaryCall;
  get(argument: _app_GetRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _app_UserReply__Output) => void): grpc.ClientUnaryCall;
  get(argument: _app_GetRequest, callback: (error?: grpc.ServiceError, result?: _app_UserReply__Output) => void): grpc.ClientUnaryCall;
  
}

export interface UserHandlers extends grpc.UntypedServiceImplementation {
  Create: grpc.handleUnaryCall<_app_CreateRequest__Output, _app_UserReply>;
  
  Get: grpc.handleUnaryCall<_app_GetRequest__Output, _app_UserReply>;
  
}

export interface UserDefinition extends grpc.ServiceDefinition {
  Create: MethodDefinition<_app_CreateRequest, _app_UserReply, _app_CreateRequest__Output, _app_UserReply__Output>
  Get: MethodDefinition<_app_GetRequest, _app_UserReply, _app_GetRequest__Output, _app_UserReply__Output>
}
