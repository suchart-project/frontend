import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import HistoryBox from "../components/HistoryBox";
import ConsultationLoad from "../components/skeleton/ConsultationLoad";
import useSWR from "swr";

import { fetcher } from "../config/config";
export default function Home() {
	const Patient_username = window.localStorage.getItem("Patient_username");

	const { data, error } = useSWR(
		"/api/request?Patient_username=" + Patient_username,
		fetcher
	);
	if (error) return "Something went wrong";
	if (!data)
		return (
			<div className="divide-y divide-gray-200 ">
				{new Array(5).fill(0).map((_, index) => (
					<div key={index} className="mt-2">
						<ConsultationLoad />
					</div>
				))}
			</div>
		);
	if (data.length === 0) {
		return (
			<div className="text-center text-gray-500">
				{"No record found (updated at " +
					new Date().toLocaleTimeString() +
					")"}
			</div>
		);
	}
	return (
		<div>
			<div className="divide-y divide-gray-200 ">
				{data.map((item, index) => (
					<div key={index} className="mt-2">
						<HistoryBox destination="/request" user={item} />
					</div>
				))}
			</div>
		</div>
	);
}
Home.getLayout = function getLayout(page) {
	return (
		<Layout>
			<Navbar />
			<p className="text-blue-900 text-3xl font-bold text-center">
				Pending requests
			</p>
			{page}
		</Layout>
	);
};
