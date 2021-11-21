import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import HistoryBox from "../components/HistoryBox";
import useSWR from "swr";
import Spinner from "../components/Spinner";
import { fetcher } from "../config/config";
export default function Home() {
	const { data, error } = useSWR("/api/request?Patient_id=user003", fetcher);
	if (error) return "Something went wrong";
	if (!data) return <Spinner />;
	return (
		<div className="divide-y divide-gray-200 ">
			{new Array(10).fill(0).map((_, index) => (
				<div key={index} className="md-2">
					<HistoryBox destination="/doctor/request" />
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
