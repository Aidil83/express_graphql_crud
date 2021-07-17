import { useQuery } from "@apollo/client";
import { GET_ALL_USERS } from "../Graphql/Queries";

type User = {
	name: string;
	username: string;
};

function ListOfUsers() {
	const { data } = useQuery(GET_ALL_USERS);
	if (data) {
		console.log(data);
	}
	return (
		<div>
			{data &&
				data.getAllUsers.map((value: User, key: number) => (
					<div key={key}>
						{value.name}
						{value.username}
					</div>
				))}
		</div>
	);
}

export default ListOfUsers;
