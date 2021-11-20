import SearchPerson from "../components/SearchPerson";
import { connectToDatabase } from "../config/mongo";
export default function Home({ movies }) {
	return (
		<div className="min-h-screen  bg-gray-50">
			<div className="flex container mx-auto  gap-6 flex-col p-6">
				<p className="text-blue-900 text-3xl font-bold text-center">
					Search physicians
				</p>
				<input
					className="textbox"
					placeholder="ค้นหาแพทย์ โดย ชื่อ / อาการ / คลินิค"
				/>
				<div className="flex flex-row justify-between items-center px-4">
					<a className="text-xl ">All result for "สุชาติ"</a>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-6 w-6 text-gray-500"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
						/>
					</svg>
				</div>
				{new Array(10).fill(0).map((_, index) => (
					<SearchPerson />
				))}
			</div>
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
