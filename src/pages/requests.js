import Layout from "../components/Layout";
import Back from "../components/Back";
import HistoryBox from "../components/HistoryBox";
import Modal from "../components/Modal";
import { useState } from "react";
import { useRouter } from "next/router";
export default function Home({ movies }) {
	return (
		<Layout>
			<Back />
			<p className="text-blue-900 text-3xl font-bold text-center">
				Requests
			</p>
			<input className="textbox" placeholder="ค้นหาผู้ใช้งาน" />
			{/* <SearchTextWithFilter text='All result for "สุชาติ"' /> */}
			<div className="divide-y divide-gray-200 ">
				{new Array(10).fill(0).map((_, index) => (
					<HistoryBox key={index} />
				))}
			</div>
		</Layout>
	);
}

export async function getServerSideProps(context) {
	console.log(context.query);
	return { props: {} };
}
