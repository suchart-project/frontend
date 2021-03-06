import useSWR from "swr";
import HistoryBox from "../../components/HistoryBox";
import Layout from "../../components/Layout";
import Navbar from "../../components/Navbar";
import ConsultationLoad from "../../components/skeleton/ConsultationLoad";
import { fetcher } from "../../config/config";

export default function Home() {
	const Doctor_username = window.localStorage.getItem("Doctor_username");
	const { data, error } = useSWR(
		"/api/request?Doctor_username=" + Doctor_username,
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
		<div className="divide-y divide-gray-200 ">
			{data.map((item, index) => (
				<div key={index} className="md-2">
					<HistoryBox destination="/doctor/request" user={item} />
				</div>
			))}
		</div>
	);
}

export async function getServerSideProps(context) {
	console.log(context.query);
	return { props: {} };
}
Home.getLayout = function getLayout(page) {
	return (
		<Layout>
			<Navbar />
			<p className="text-blue-900 text-3xl font-bold text-center">
				Incoming requests
			</p>
			{page}
		</Layout>
	);
};
