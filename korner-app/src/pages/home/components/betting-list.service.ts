import { Injectable } from '@angular/core';

import * as moment from 'moment';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { MatchDay, Bet } from '../shared';
import { HttpClient, HttpParams } from '@angular/common/http';


@Injectable()
export class BettingListService {
     betsMatch1: Array<Bet> = [
        {
            localGoals: 0,
            visitorGoals: 0,
            participant: {
                name: 'Rafalillo',
                avatar: 'assets/imgs/s-a-r-a-h-s-h-a-r-p-764291-unsplash.jpg'                  
            },
            note: 'Apuesta ganadora!!',
            editable: false
        }
    ];
    betsMatch2: Array<Bet> = [
        {
            localGoals: 1,
            visitorGoals: 0,
            note: 'Partido igualado',
            participant: {
                name: 'Rafalillo',
                avatar: 'assets/imgs/s-a-r-a-h-s-h-a-r-p-764291-unsplash.jpg'       
            },
            editable: false
        },
        {
            localGoals: 2,
            visitorGoals: 3,
            note: 'Partido igualado',
            participant: {
                name: 'Marta',
                avatar: 'assets/imgs/zuza-reinhard-707831-unsplash.jpg'       
            },
            editable: false
        }
    ];

    private readonly getMatchdaysUrl = '/korner-api/matchdays';

    constructor(private http: HttpClient) {}

    public fetchMockMatchDay(date: moment.Moment): Observable<MatchDay> {
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

    public fetchMatchDay(date: moment.Moment): Observable<MatchDay> {
        const params: HttpParams = new HttpParams().append('date', date.toISOString());

        return this.http.get<MatchDay>(this.getMatchdaysUrl, { params });
    }

}
