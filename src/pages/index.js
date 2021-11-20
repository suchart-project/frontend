import { connectToDatabase } from "../config/mongo";
export default function Home({ movies }) {
	return (
		<div className="min-h-screen bg-gray-50">
			{JSON.stringify(movies, null, 2)}
		</div>
	);
}

export async function getServerSideProps(context) {
	const { client, db } = await connectToDatabase();
	const isConnected = true;
	const movies = await db.collection("movies").find({}).limit(20).toArray();

	return {
		props: { movies: JSON.parse(JSON.stringify(movies)) },
	};
}
