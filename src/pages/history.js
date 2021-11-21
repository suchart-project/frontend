import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import PatientHistory from "../components/PatientHistory";
import SearchTextWithFilter from "../components/SearchTextWithFilter";

export default function Home({ movies }) {
	return (
		<Layout>
			<Navbar />
			<p className="text-blue-900 text-3xl font-bold text-center">
				Admin (User history)
			</p>
			<input className="textbox" placeholder="ค้นหาผู้ใช้งาน" />
			<SearchTextWithFilter text='All result for "สุชาติ"' />
			<div className="divide-y divide-gray-200 ">
				{new Array(10).fill(0).map((_, index) => (
					<PatientHistory />
				))}
			</div>
		</Layout>
	);
}
