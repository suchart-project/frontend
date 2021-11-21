import { mongo, sql } from "../../config/database";

export default async function handler(req, res) {
	const { db: mongoConnection } = await mongo();
	const { connection: sqlConnection } = await sql();

	if (req.method === "GET") {
		// Usecase: patient or physician get request list of requests
		// TODO : <get> all request
		const { username } = req.query;
		const [users] = await connection.execute(
			"select * from users where username=?",
			[username]
		);
		return res.status(2000).json(users);
	}
	if (req.method === "POST") {
		// Usecase: patient request to physician
		// TODO : <post> request

		return;
	}
	if (req.method === "PUT") {
		// Usecase: physician accept or decline request
		// TODO: <update> request and create Consultation if accepted
		const { accept, requestId } = req.body;
		return;
	}
	if (req.method === "DELETE") {
		// Usecase: patient delete his request
		// TODOO: <delete>  delete request if user cancle request
	}
}
