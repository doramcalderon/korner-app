import { Component, OnInit } from '@angular/core';

import * as moment from 'moment';

import { ProfileService } from '../../profile/profile.service';
import { MatchDay, Match, Bet } from '../shared';
import { BettingListService } from './betting-list.service';

@Component({
    selector: 'ka-betting-list',
    templateUrl: 'betting-list.html',
})
export class BettingListComponent implements OnInit {
    betsByMatch: Object;
    matchDay: MatchDay;
    newBet: Bet;

    constructor(
        private bettinglistService: BettingListService,
        private profileService: ProfileService,
    ) {}

    ngOnInit() {
        this.bettinglistService
            .fetchMatchDay(moment('2019-02-23'))
            .subscribe(
                matchDay => this.success(matchDay),
                error => console.log(error),
            );
    }

    /**
     * Add an empty bet to the list.
     */
    public addBet(match: Match) {
        this.profileService
            .fetchProfile()
            .subscribe(profile => this.initializeBet(match, profile.name));
    }

    private initializeBet(match: Match, userName: string) {
        match.bets.push({
            participant: {
                name: userName,
            },
            localGoals: 0,
            visitorGoals: 0,
            editable: true,
        });
    }

    private success(matchDay: MatchDay) {
        this.matchDay = matchDay;
    }
}
