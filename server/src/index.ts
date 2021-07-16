import express from "express";
import cors from "cors";
import { graphqlHTTP } from "express-graphql";
import { createConnection } from "typeorm";
import { schema } from "./Schema";

const main = async () => {
	await createConnection({
		type: "mysql",
		database: "graphql_crud",
		username: "root",
		password: "password",
		logging: true,
		synchronize: false,
		entities: [],
	});

	const rootValue = {
		hello: () => "Hello world!",
	};

	const app = express();
	app.use(cors());
	app.use(express.json());
	app.use(
		"/graphql",
		graphqlHTTP({
			schema,
			rootValue,
			graphiql: true,
		})
	);

	app.listen(3001, () => {
		console.log("Server running on port 3001.");
	});
};

main().catch((err) => {
	console.error(err);
});
