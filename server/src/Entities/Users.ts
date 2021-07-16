import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

// NOTE: Users is the name of the our table from our database.
@Entity()
export class Users extends BaseEntity {
	@PrimaryGeneratedColumn()
	id!: number;
	@Column()
	name!: string;
	@Column()
	username!: string;
	@Column()
	password!: string;
}
