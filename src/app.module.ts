import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { config } from './database.config';
import { UsersModule } from './users/users.module';
import { JourneyModule } from './journey/journey.module';

@Module({
  imports: [
    JourneyModule,
    UsersModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRoot(config()),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
