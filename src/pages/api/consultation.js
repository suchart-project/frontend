import { mongo, sql } from "../../config/database";
import { uuid } from "uuidv4";
export default async function handler(req, res) {
	const { db: mongoConnection } = await mongo();
	const { connection: sqlConnection } = await sql();

	if (req.method === "GET") {
		const { Username } = req.query;
		// Usecase: patient or physic get consulation
		const result = await mongoConnection
			.collection("Consultation")
			.find({ $or: [{ patient: Username }, { physician: Username }] })
			.toArray();

		return res.status(200).json(result);
	}
}
