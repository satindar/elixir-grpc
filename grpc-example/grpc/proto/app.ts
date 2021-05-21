import type * as grpc from '@grpc/grpc-js';
import type { ServiceDefinition, EnumTypeDefinition, MessageTypeDefinition } from '@grpc/proto-loader';

import type { UserClient as _app_UserClient, UserDefinition as _app_UserDefinition } from './app/User';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  app: {
    CreateRequest: MessageTypeDefinition
    GetRequest: MessageTypeDefinition
    User: SubtypeConstructor<typeof grpc.Client, _app_UserClient> & { service: _app_UserDefinition }
    UserReply: MessageTypeDefinition
  }
}
