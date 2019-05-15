import { ObjectIdColumn, Column, Entity } from 'typeorm';

@Entity()
export class Registration {
	@ObjectIdColumn()
	id: string;

	@Column()
	expiration: Date;

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
