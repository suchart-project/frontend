// Next.js API route support: https://nextjs.org/docs/api-routes/introductio

import { mongo, sql } from "../../config/database";

export default async function handler(req, res) {
	const { db: mongoConnection } = await mongo();
	const { connection: sqlConnection } = await sql();

	if (req.method === "GET") {
		const usersMongo = await mongoConnection
			.collection("users")
			.find({})
			.toArray();
		const [usersSql] = await sqlConnection.execute("select * from  users");
		if (!usersMongo || !usersSql)
			return res.status(404).json({ error: "No users found" });
		return res.status(200).json({ usersMongo, usersSql });
	}
	if (req.method === "POST") {
		const { name, email, password } = req.body;
		if (!name || !email || !password)
			return res.status(400).json({ error: "Missing required fields" });
		const userSql = await mongoConnection.collection("users").insertOne({
			name,
			email,
			password,
		});
		const resultSql = await sqlConnection.execute(
			`insert into users (name,email,password) values  (?,?,?)`,
			[name, email, password]
		);
		return res.status(201).json(userSql);
	}

	if (req.method === "DELETE") {
		const mongoResult = await mongoConnection
			.collection("users")
			.deleteMany({});
		const resultSql = await sqlConnection.execute(`delete from users `);
		return res.status(200).json({ mongoResult, resultSql });
	}
}
