import { ObjectIdColumn, Column } from 'typeorm';

export class User {
	@ObjectIdColumn()
	id: string;

	@Column()
	name: string;
}
