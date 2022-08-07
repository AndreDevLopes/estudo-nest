import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateJourneyDto } from './dto/create-journey.dto';
import { UpdateJourneyDto } from './dto/update-journey.dto';
import { Journey, JourneyDocument } from './entities/journey.entity';

@Injectable()
export class JourneyService {
  constructor(
    @InjectModel(Journey.name) private journeyModel: Model<JourneyDocument>,
  ) {}

  async create(createJourneyDto: CreateJourneyDto): Promise<Journey> {
    const journey = new this.journeyModel(createJourneyDto);
    return journey.save();
  }

  async findAll(): Promise<Journey[]> {
    return this.journeyModel.find().exec();
  }

  async findOne(id: string): Promise<Journey> {
    return this.journeyModel.findById(id);
  }

  async update(
    id: string,
    updateJourneyDto: UpdateJourneyDto,
  ): Promise<Journey> {
    return this.journeyModel.findByIdAndUpdate(
      { _id: id },
      { $set: updateJourneyDto },
      { new: true },
    );
  }

  async remove(id: string) {
    return this.journeyModel
      .deleteOne({
        _id: id,
      })
      .exec();
  }
}
