import { MongoClient } from "mongodb";
let MONGODB_URI = "mongodb+srv://admin:sepassword@cluster0.nxyq5.mongodb.net/";
let dbName = "matching";

let cachedClient = null;
let cachedDb = null;

if (!MONGODB_URI) {
	throw new Error(
		"Please define the MONGODB_URI environment variable inside .env.local"
	);
}

if (!dbName) {
	throw new Error(
		"Please define the MONGODB_DB environment variable inside .env.local"
	);
}

export async function connectToDatabase() {
	if (cachedClient && cachedDb) {
		return { client: cachedClient, db: cachedDb };
	}

	const client = await MongoClient.connect(MONGODB_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	});
	if (client) {
		console.log("Connected to MongoDB");
	} else {
		console.log("Not connected to MongoDB");
	}

	const db = client.db(dbName);

	cachedClient = client;
	cachedDb = db;

	return { client, db };
}
