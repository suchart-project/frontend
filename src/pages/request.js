import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import SearchPerson from "../components/SearchPerson";
import SearchTextWithFilter from "../components/SearchTextWithFilter";
import { connectToDatabase } from "../config/mongo";
export default function Home({ movies }) {
	const handleSubmit = (e) => {
		e.preventDefault();
		alert("asdfasdf");
	};
	return (
		<Layout>
			<Navbar />
			<p className="text-blue-900 text-3xl font-bold text-center">
				Fill in your syntoms
			</p>
			<a className="">คุณได้เลือกเข้ารับการปรึกษากับ :</a>
			<SearchPerson />
			<a className="">อาการของท่าน :</a>
			<form className="flex flex-col gap-6 " onSubmit={handleSubmit}>
				<textarea type="text" className="textbox h-64 " />
				<button className="button hover:ring-1 ring-indigo-300">
					Submit
				</button>
			</form>
		</Layout>
	);
}

export async function getServerSideProps(context) {
	const { db } = await connectToDatabase();

	const movies = await db.collection("movies").find({}).limit(20).toArray();

	return {
		props: { movies: JSON.parse(JSON.stringify(movies)) },
	};
}
