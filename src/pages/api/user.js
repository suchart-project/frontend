// Next.js API route support: https://nextjs.org/docs/api-routes/introductio

import { mongo, sql } from "../../config/database";

export default async function handler(req, res) {
	const { db: mongoConnection } = await mongo();
	const { connection: sqlConnection } = await sql();

	if (req.method === "GET") {
		// Usecase: patient search for physician
		// TODO : use a lot of queries to get physician that relate to search text
		const [users] = await sqlConnection.execute("select * from  users");
		// if (!users) return res.status(404).json({ error: "No users found" });
		return res.status(200).json(users);
	}
	if (req.method === "POST") {
		const { name, email, password } = req.body;
		if (!name || !email || !password)
			return res.status(400).json({ error: "Missing required fields" });

		const resultSql = await sqlConnection.execute(
			`insert into users (name,email,password) values  (?,?,?)`,
			[name, email, password]
		);
		return res.status(201).json(userSql);
	}
}
