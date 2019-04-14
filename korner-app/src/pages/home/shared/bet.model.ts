import { Participant } from '.';

export interface Bet {
    participant: Participant;
    localGoals: number;
    visitorGoals: number;
    note?: string;
    editable: boolean;
    likes?: boolean;
    comments?: string[];
}
