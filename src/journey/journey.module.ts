import { Module } from '@nestjs/common';
import { JourneyService } from './journey.service';
import { JourneyController } from './journey.controller';
import { Journey, JourneySchema } from './entities/journey.entity';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Journey.name, schema: JourneySchema }]),
  ],
  controllers: [JourneyController],
  providers: [JourneyService],
})
export class JourneyModule {}
