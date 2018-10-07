import * as moment from 'moment';
import { Match } from './';

export interface MatchDay {
    number: string;
    name?: string;
    date: moment.Moment;
    matchs: Array<Match>;
} 