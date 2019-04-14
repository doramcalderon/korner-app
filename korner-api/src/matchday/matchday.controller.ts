import { Controller, Get, Query, Post } from '@nestjs/common';
import { MatchDayService } from './matchday,service';
import { Matchday } from './entities/matchday.entity';

@Controller('matchdays')
export class MatchDayController {

    constructor(private readonly matchDayService: MatchDayService) {}

    @Get()
    async getAll(@Query('date') day: Date): Promise<Matchday> {
        const result = await this.matchDayService.findByDate(day);
        console.log(`result: ${JSON.stringify(result)}`);
        return result;
    }

    @Post()
    async postMatchDay(matchday: any): Promise<any> {
        return await this.matchDayService.newMatchDay(matchday);
    }
}
