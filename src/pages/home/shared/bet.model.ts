import { Participant } from '.';

export interface Bet {
    participant: Participant;
    localGoals: number;
    visitorGoals: number;
    note?: string;
}