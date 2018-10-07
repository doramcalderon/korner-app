import { Injectable } from '@angular/core';

import * as moment from 'moment';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { MatchDay } from '../shared';


@Injectable()
export class BettingListService {
    betsMatch1 = [
        {
            localGoals: 0,
            visitorGoals: 0,
            participant: {
                name: 'Rafalillo',
                avatar: 'assets/imgs/s-a-r-a-h-s-h-a-r-p-764291-unsplash.jpg'                  
            },
            note: 'Apuesta ganadora!!'
        }
    ];
    betsMatch2 = [
        {
            localGoals: 1,
            visitorGoals: 0,
            note: 'Partido igualado',
            participant: {
                name: 'Rafalillo',
                avatar: 'assets/imgs/s-a-r-a-h-s-h-a-r-p-764291-unsplash.jpg'       
            }
        },
        {
            localGoals: 2,
            visitorGoals: 3,
            note: 'Partido igualado',
            participant: {
                name: 'Marta',
                avatar: 'assets/imgs/zuza-reinhard-707831-unsplash.jpg'       
            }
        }
    ];

    public fetchMatchDay(date: moment.Moment): Observable<MatchDay> {
        return Observable.of(
            {
                number: '1',
                name: 'Match Day 1',
                date: date,
                matchs: [
                    {
                        local: {
                            name: 'F.C. Barcelona'
                        },
                        visitor: {
                            name: 'Real Madrid'
                        },
                        bets: this.betsMatch1
                    },
                    {
                        local: {
                            name: 'Malaga',
                        },
                        visitor: {
                            name: 'Atlético de Madrid'
                        },
                        bets: this.betsMatch2
                    }
                ]
            }
        );
    }

}