import { Component, OnInit } from '@angular/core';

import * as moment from 'moment';

import { MatchDay } from '../shared';
import { BettingListService } from './betting-list.service';

@Component({
    selector: 'ka-betting-list',
    templateUrl: 'betting-list.html'
})
export class BettingListComponent implements OnInit {

    betsByMatch: Object;
    matchDay: MatchDay;

    constructor(private bettinglistService: BettingListService) {
    }

    ngOnInit() {
        this.bettinglistService.fetchMatchDay(moment()).subscribe(
            matchDay => this.success(matchDay),
            error => console.log(error)
            
        )
    }

    private success(matchDay: MatchDay) {
        this.matchDay = matchDay;
    }
}