import { mongo, sql } from "../../config/database";
import { uuid } from "uuidv4";
export default async function handler(req, res) {
	const { db: mongoConnection } = await mongo();
	const { connection: sqlConnection } = await sql();

	if (req.method === "GET") {
		// Usecase: patient or physician get request list of requests
		// TODO : <get> all request
		const { Patient_username, Doctor_username } = req.query;
		if (Patient_username) {
			const [result] = await sqlConnection.execute(
				"select Username,Firstname,Lastname from REQUEST r, CUSTOMER c where  r.Patient_username=? and c.Username = r.Patient_username",
				[Patient_username]
			);
			return res.status(200).json(result);
		}
		if (Doctor_username) {
			const [result] = await sqlConnection.execute(
				"select Username,Firstname,Lastname from REQUEST r, CUSTOMER c where  r.Doctor_username=? and c.Username = r.Patient_username",
				[Doctor_username]
			);
			return res.status(200).json(result);
		}
		const [result] = await sqlConnection.execute(
			"select Username,Firstname,Lastname from REQUEST r, CUSTOMER c where c.Username = r.Patient_username"
		);
		return res.status(200).json(result);
	}
	if (req.method === "POST") {
		// Usecase: patient request to physician
		// TODO : <post> request
		const { Message, Patient_username, Doctor_username } = JSON.parse(
			req.body
		);
		console.log(req.body, Message, Patient_username, Doctor_username);
		const id = uuid();
		const [result] = await sqlConnection.execute(
			"insert into REQUEST (Request_id,Message,Patient_username,Doctor_username) values (?,?,?,?)",
			[id, Message, Patient_username, Doctor_username]
		);
		return res.status(200).json(result);
	}
	if (req.method === "PUT") {
		// Usecase: physician accept or decline request
		// TODO: <update> request and create Consultation if accepted
		const { Status, Request_id } = req.body;
		const [result] = await sqlConnection.execute(
			"update REQUEST set Status=? where Request_id=?",
			[Status, Request_id]
		);
		return res.status(200).json(result);
	}
	if (req.method === "DELETE") {
		// Usecase: patient delete his request
		// TODOO: <delete>  delete request if user cancle request
		const { Request_id } = req.body;
		const [result] = await sqlConnection.execute(
			"delete from REQUEST where Request_id=?",
			[Request_id]
		);
		return res.status(200).json(result);
	}
}
