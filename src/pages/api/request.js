import { mongo, sql } from "../../config/database";
import { uuid } from "uuidv4";
export default async function handler(req, res) {
	const { db: mongoConnection } = await mongo();
	const { connection: sqlConnection } = await sql();

	if (req.method === "GET") {
		// Usecase: patient or physician get request list of requests
		// TODO : <get> all request
		const { Patient_username, Doctor_username, Request_id, select } =
			req.query;

		if (Request_id && select) {
			const [result] = await sqlConnection.execute(
				"select * from REQUEST r, CUSTOMER c where  r.Status=0 and r.Request_id=? and c.Patient_username= r.Username ",
				[Request_id]
			);
			return res.status(200).json(result);
		}
		if (Request_id) {
			const [result] = await sqlConnection.execute(
				"select * from REQUEST r, CUSTOMER c,DOCTOR d,CLINIC cl where r.Request_id=? and  r.Status=0   and c.Username = r.Doctor_username and d.Username = r.Doctor_username and d.Clinic_id = cl.Clinic_id ",
				[Request_id]
			);
			return res.status(200).json(result);
		}

		if (Patient_username) {
			const [result] = await sqlConnection.execute(
				"select * from REQUEST r, CUSTOMER c where r.Status=0 and r.Patient_username=? and c.Username = r.Doctor_username",
				[Patient_username]
			);
			return res.status(200).json(result);
		}
		if (Doctor_username) {
			const [result] = await sqlConnection.execute(
				"select * from REQUEST r, CUSTOMER c where r.Status=0 and r.Doctor_username=? and c.Username =  r.Patient_username",
				[Doctor_username]
			);
			return res.status(200).json(result);
		}
		const [result] = await sqlConnection.execute(
			"select * from REQUEST r, CUSTOMER c where r.Status=0 and c.Username = r.Patient_username"
		);
		return res.status(200).json(result);
	}
	if (req.method === "POST") {
		// Usecase: patient request to physician
		// TODO : <post> request
		const { Message, Patient_username, Doctor_username } = req.body;

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
		// console.log(req.body);
		const { Status, Request_id } = req.body;
		const [result] = await sqlConnection.execute(
			"update REQUEST set Status=? where Request_id=?",
			[Status, Request_id]
		);

		if (Status === 1) {
			const [result] = await sqlConnection.execute(
				"select Patient_username,Doctor_username,Request_id,Firstname,Lastname,Message from REQUEST r , CUSTOMER c where r.Request_id=? and c.Username=r.Doctor_username",
				[Request_id]
			);
			mongoConnection.collection("Consultation").insertOne({
				physician: result[0].Doctor_username,
				patient: result[0].Patient_username,
				pay_amount: 0,
				status: 0,
				payment: [],
				doctor: {
					Firstname: result[0].Firstname,
					Lastname: result[0].Lastname,
				},
				message: result[0].Message,
				chatroom: {
					call_count: 0,
					call_minutes: 0,
					chats: [],
					videoCalls: [],
				},
				start_time: new Date(),
			});
		}
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
