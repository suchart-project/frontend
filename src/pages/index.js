import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import SearchPerson from "../components/SearchPerson";
import SearchTextWithFilter from "../components/SearchTextWithFilter";
import { useState } from "react";
import useSWR from "swr";
import Spinner from "../components/Spinner";
import { fetcher } from "../config/config";
export default function Home({}) {
	const [filterOption, setFilterOption] = useState({});
	const { data, error } = useSWR("/api/user", fetcher);
	if (error) return "Something went wrong";
	if (!data) return <Spinner />;

	return (
		<>
			<input
				className="textbox"
				placeholder="ค้นหาแพทย์ โดย ชื่อ / อาการ / คลินิค"
			/>
			<SearchTextWithFilter
				text='All result for "สุชาติ"'
				setFilter={setFilterOption}
			/>
			{data.map((user, index) => (
				<SearchPerson key={index} user={user} />
			))}
		</>
	);
}

Home.getLayout = function getLayout(page) {
	return (
		<Layout>
			<Navbar />
			<p className="text-blue-900 text-3xl font-bold text-center">
				Search physicians
			</p>
			{page}
		</Layout>
	);
};
