import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class User {
  uid: string;
}
