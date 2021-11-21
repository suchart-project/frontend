import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import SearchPerson from "../components/SearchPerson";
import SearchTextWithFilter from "../components/SearchTextWithFilter";

export default function Home({ movies }) {
	return (
		<Layout>
			<Navbar />
			<p className="text-blue-900 text-3xl font-bold text-center">
				Search physicians
			</p>
			<input
				className="textbox"
				placeholder="ค้นหาแพทย์ โดย ชื่อ / อาการ / คลินิค"
			/>
			<SearchTextWithFilter text='All result for "สุชาติ"' />

			{new Array(10).fill(0).map((_, index) => (
				<SearchPerson key={index} />
			))}
		</Layout>
	);
}
