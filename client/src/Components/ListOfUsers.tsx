import { useMutation, useQuery } from "@apollo/client";
import { DELETE_USER } from "../Graphql/Mutation";
import { GET_ALL_USERS } from "../Graphql/Queries";

type User = {
	id: string;
	name: string;
	username: string;
};

function ListOfUsers() {
	const { data } = useQuery(GET_ALL_USERS);
	const [deleteUser, { error }] = useMutation(DELETE_USER);
	console.log(data);

	return (
		<div>
			{data &&
				data.getAllUsers.map((user: User, key: number) => (
					<div key={key}>
						{user.name}
						{user.username}
						<button
							onClick={() => {
								deleteUser({ variables: { id: user.id } });
							}}>
							Delete User
						</button>
					</div>
				))}
		</div>
	);
}

export default ListOfUsers;
