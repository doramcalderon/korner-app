import { ObjectIdColumn, Column, Entity } from 'typeorm';

@Entity()
export class User {
	@ObjectIdColumn()
	id: string;

	@Column()
	username: string;

	@Column()
	mail: string;

	@Column()
	password: string;

	@Column()
	name: string;

	@Column()
	lastname: string;

}
