import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as moment from 'moment';
import { Repository, InsertResult } from 'typeorm';

import { Matchday } from './entities/matchday.entity';

@Injectable()
export class MatchDayService {
    constructor(
        @InjectRepository(Matchday)
        private readonly matchDayRepository: Repository<Matchday>,
    ) {}

    async findAll(): Promise<Matchday[]> {
        return await this.matchDayRepository.find();
    }

    async findByDate(day: Date): Promise<Matchday> {
        const date: Date = moment(day).toDate();
        return await this.matchDayRepository.findOne({ date });
    }

    async newMatchDay(matchday: any): Promise<Matchday> {
        return await this.matchDayRepository.create(matchday as Matchday);
    }
}
