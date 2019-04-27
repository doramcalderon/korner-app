import { Controller, Get, Query, Post, UseGuards } from '@nestjs/common';
import { MatchDayService } from './matchday,service';
import { Matchday } from './entities/matchday.entity';
import { AuthGuard } from '@nestjs/passport';

@Controller('matchdays')
export class MatchDayController {

    constructor(private readonly matchDayService: MatchDayService) {}

    @Get()
    @UseGuards(AuthGuard())
    async getAll(@Query('date') day: Date): Promise<Matchday> {
        const result = await this.matchDayService.findByDate(day);
        return result;
    }

    @Post()
    @UseGuards(AuthGuard())
    async postMatchDay(matchday: any): Promise<any> {
        return await this.matchDayService.newMatchDay(matchday);
    }
}
