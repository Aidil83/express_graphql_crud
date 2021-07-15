import express from 'express';
import cors from 'cors';
import { graphqlHTTP } from 'express-graphql';
import { createConnection } from 'typeorm';

const main = async () => {
	const app = express();
	app.use(cors());
	app.use(express.json());
	// app.use("/graphql", graphqlHTTP({
	//   schema,
	//   graphiql: true,
	// }))
	app.listen(3001, () => {
		console.log('Server running on port 3001.');
	});
};

main().catch((err) => {
	console.error(err);
});
