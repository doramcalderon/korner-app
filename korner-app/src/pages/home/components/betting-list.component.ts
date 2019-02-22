import { Component, OnInit } from '@angular/core';

import * as moment from 'moment';

import { MatchDay, Match } from '../shared';
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

    /**
     * Add an empty bet to the list.
     */
    public addBet(match: Match) {
        match.bets.push({
            participant: {
                name: 'Luis'
            },
            localGoals: 0,
            visitorGoals: 0,
            editable: true
        });
    }

    private success(matchDay: MatchDay) {
        this.matchDay = matchDay;
    }
}