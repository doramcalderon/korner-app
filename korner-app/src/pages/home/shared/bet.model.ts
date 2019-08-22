import { Participant } from '.';

export interface Bet {
    participant: Participant;
    localGoals: number;
    visitorGoals: number;
    editable: boolean;
    likes?: boolean;
    comments?: string[];
}
