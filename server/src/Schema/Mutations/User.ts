import { GraphQLID, GraphQLString } from "graphql";
import { Users } from "../../Entities/Users";
import { MessageType } from "../TypeDefs/Messages";
import { UserType } from "../TypeDefs/User";

export const CREATE_USER = {
	type: UserType,
	args: {
		name: { type: GraphQLString },
		username: { type: GraphQLString },
		password: { type: GraphQLString },
	},
	async resolve(parent: any, args: any) {
		const { name, username, password } = args;
		await Users.insert({ name, username, password });
		return args;
	},
};

export const UPDATE_PASSWORD = {
	type: MessageType,
	args: {
		username: { type: GraphQLString },
		oldPassword: { type: GraphQLString },
		newPassword: { type: GraphQLString },
	},
	async resolve(parent: any, args: any) {
		const { username, oldPassword, newPassword } = args;
		const user = await Users.findOne({ username: username });

		// Throw error if user doesn't exist.
		if (!user) {
			throw new Error("USERNAME DOESN'T EXIST");
		}
		const userPassword = user?.password;

		if (oldPassword === userPassword) {
			await Users.update({ username: username }, { password: newPassword });
			return { sucessful: true, message: "PASSWORD UPDATED" };
		} else {
			throw new Error("INCORRECT PASSWORD");
		}
	},
};

export const DELETE_USER = {
	type: MessageType,
	args: {
		id: { type: GraphQLID },
	},
	async resolve(parent: any, args: any) {
		const { id } = args;
		await Users.delete(id);
		return { sucessful: true, message: "DELETE WORKED" };
	},
};
