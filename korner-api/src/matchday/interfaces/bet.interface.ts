import { User } from '../../users/entities/user.entity';

export interface Bet {
	localGoals: number;
    visitorGoals: number;
    participant: User;
    note: string;
    editable: boolean;
    likes: number;
    comments: string [];
}
