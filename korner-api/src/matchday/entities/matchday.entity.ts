import { Entity, Column, ObjectIdColumn } from 'typeorm';

import { Match } from '../interfaces/match.interface';

@Entity()
export class Matchday {
    @ObjectIdColumn({generated: true})
    _id: number;

    @Column()
    name: string;

    @Column()
    date: Date;

    @Column()
    matchs: Match[];
}
