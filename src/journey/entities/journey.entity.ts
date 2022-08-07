import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type JourneyDocument = Journey & Document;

@Schema()
export class Journey {
  @Prop({ required: true })
  day: string;

  @Prop({ default: false })
  halfTime: boolean;

  @Prop({ required: true })
  entryTime: string;

  @Prop({ default: null })
  timeInterval: string;

  @Prop({ default: null })
  returnTime: string;

  @Prop({ required: true })
  departureTime: string;

  @Prop({ required: true })
  username: string;
}

export const JourneySchema = SchemaFactory.createForClass(Journey);
