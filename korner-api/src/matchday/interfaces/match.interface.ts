import { Bet } from './bet.interface';
import { Team } from './team.interface';

export interface Match {
	local: Team;
    visitor: Team;
    bets: Bet[];
}
