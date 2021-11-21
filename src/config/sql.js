import { createConnection } from "mysql2/promise";

// const host = "34.124.158.163";
// const port = 3306;
// const user = "user";
// const password = "pass";
const host = "localhost";
const port = 3306;
const user = "root";
const password = "a0832003423";
const database = "se_project";
let connection = null;

if (!host || !port || !user || !password) {
	throw new Error(
		"Please define the SQL environment variable inside .env.local"
	);
}

export async function connectToDatabase() {
	if (connection) {
		return { connection };
	}

	connection = await createConnection({
		host,
		user,
		database,
		password,
		port,
	});
	if (connection) console.log("Connected to sql");
	else og("Failed to connect to sql");
	return { connection };
}
