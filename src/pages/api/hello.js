// Next.js API route support: https://nextjs.org/docs/api-routes/introductio

import { connectToDatabase } from "../../config/mongo";

export default async function handler(req, res) {
	const { db } = await connectToDatabase();
	db.collection("movies").insertOne({ title: "test" });
	const movies = await db.collection("movies").find({}).limit(20).toArray();
	res.status(200).json({ name: "John Doe", movies });
}
