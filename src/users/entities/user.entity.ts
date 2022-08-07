import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({ type: String, unique: true, required: true, index: true })
  username: string;

  @Prop({ type: String, required: true })
  name: string;

  @Prop({ type: String, unique: true, index: true })
  email: string;

  @Prop({ type: String, required: true })
  password: string;

  @Prop({ type: String, unique: true, index: true })
  telephone: string;

  @Prop({ type: Number })
  hoursWorkedDay: number;
}

export const UserSchema = SchemaFactory.createForClass(User);
