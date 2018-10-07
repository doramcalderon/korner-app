import { Team } from './team.model';
import { Bet } from './bet.model';

export interface Match {
    local: Team;
    visitor: Team;
    bets?: Array<Bet>;
}