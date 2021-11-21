import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import SearchPerson from "../components/SearchPerson";
import SearchTextWithFilter from "../components/SearchTextWithFilter";
import { useState } from "react";
export default function Home({}) {
	const [filterOption, setFilterOption] = useState({});
	return (
		<Layout>
			<Navbar />
			<p className="text-blue-900 text-3xl font-bold text-center">
				Search physicians
			</p>
			{JSON.stringify(filterOption, null, 2)}
			<input
				className="textbox"
				placeholder="ค้นหาแพทย์ โดย ชื่อ / อาการ / คลินิค"
			/>
			<SearchTextWithFilter
				text='All result for "สุชาติ"'
				setFilter={setFilterOption}
			/>

			{new Array(10).fill("aaaa").map((uid, index) => (
				<SearchPerson key={index} uid={uid} />
			))}
		</Layout>
	);
}
