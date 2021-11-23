import useSWR from "swr";
import ConsultationBox from "../components/ConsultationBox";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import ConsultationLoad from "../components/skeleton/ConsultationLoad";
import { fetcher } from "../config/config";

export default function Home() {
	const Username = localStorage.getItem("Patient_username");
	const { data, error } = useSWR(
		"/api/consultation?Username=" + Username,
		fetcher
	);
	if (error) return "Something went wrong";
	if (!data)
		return (
			<>
				{new Array(10).fill(0).map((_, idx) => (
					<ConsultationLoad key={idx} />
				))}
			</>
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
		<>
			{data.map((item, index) => (
				<div key={index} className="mt-2">
					<ConsultationBox destination="/consulatation" user={item} />
				</div>
			))}
		</>
	);
}
Home.getLayout = function getLayout(page) {
	return (
		<Layout>
			<Navbar />
			<p className="text-blue-900 text-3xl font-bold text-center">
				Consultations
			</p>
			<div className="divide-y divide-gray-200 ">{page}</div>
		</Layout>
	);
};
