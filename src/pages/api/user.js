// Next.js API route support: https://nextjs.org/docs/api-routes/introductio

import { mongo, sql } from "../../config/database";
import { uuid } from "uuidv4";
export default async function handler(req, res) {
	const { db: mongoConnection } = await mongo();
	const { connection: sqlConnection } = await sql();

	if (req.method === "GET") {
		// Usecase: patient search for physician
		// TODO : use a lot of queries to get physician that relate to search text
		let { SearchStr, OnlineFlag, DistanceFlag, Username } = req.query;
		if (Username) {
			const [result] = await sqlConnection.execute(
				`
                SELECT d.Username, c.Firstname, c.Lastname, c.Coordinate, c.Img_path, cn.Clinic_name, d.Total_patients, d.Avg_rating, d.Price_min, d.Price_max, d.Price_avg, s.Name
                FROM DOCTOR d
                NATURAL JOIN CUSTOMER c
                JOIN CLINIC cn ON d.Clinic_id = cn.Clinic_id
                JOIN DOCTOR_SPECIALTY ds ON d.Username = ds.Username
                JOIN SPECIALTY s ON ds.Specialty_id = s.Specialty_id
                WHERE c.Type = 'DOCTOR' and c.Username = ?
                ORDER BY Avg_rating DESC;
            `,
				[Username]
			);

			return res.status(200).json(result);
		}
		if (!SearchStr) {
			const [result] = await sqlConnection.execute(`
                SELECT d.Username, c.Firstname, c.Lastname, c.Coordinate, c.Img_path, cn.Clinic_name, d.Total_patients, d.Avg_rating, d.Price_min, d.Price_max, d.Price_avg, s.Name
                FROM DOCTOR d
                NATURAL JOIN CUSTOMER c
                JOIN CLINIC cn ON d.Clinic_id = cn.Clinic_id
                JOIN DOCTOR_SPECIALTY ds ON d.Username = ds.Username
                JOIN SPECIALTY s ON ds.Specialty_id = s.Specialty_id
                WHERE c.Type = 'DOCTOR'
                ORDER BY Avg_rating DESC;
            `);

			return res.status(200).json(result);
		}

		OnlineFlag = OnlineFlag === "true";
		DistanceFlag = DistanceFlag === "true";
		const { Lat, Lng } = req.query;
		console.log(Lat, Lng);
		const [users] = await sqlConnection.execute(
			`
                CALL SearchDoctorsIncludeSpecialties(?, current_timestamp, ?, ?, ?, ?);
            `,
			[
				SearchStr,
				Lat || 100.509349,
				Lng || 13.782778,
				OnlineFlag,
				DistanceFlag,
			]
		);
		// if (!users) return res.status(404).json({ error: "No users found" });
		return res.status(200).json(users);
	}
	// if (req.method === "POST") {
	// 	const { name, email, password } = req.body;
	// 	if (!name || !email || !password)
	// 		return res.status(400).json({ error: "Missing required fields" });

	// 	const resultSql = await sqlConnection.execute(
	// 		`insert into users (name,email,password) values  (?,?,?)`,
	// 		[name, email, password]
	// 	);
	// 	return res.status(201).json(userSql);
	// }
}
