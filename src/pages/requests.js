import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import HistoryBox from "../components/HistoryBox";
import useSWR from "swr";
import Spinner from "../components/Spinner";
import { fetcher } from "../config/config";
export default function Home() {
	const { data, error } = useSWR(
		"/api/request?Patient_username=user003",
		fetcher
	);
	if (error) return "Something went wrong";
	if (!data) return <Spinner />;
	return (
		<>
			<div className="divide-y divide-gray-200 ">
				{data.map((item, index) => (
					<div key={index} className="mt-2">
						<HistoryBox destination="/request" user={item} />
					</div>
				))}
			</div>
		</>
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
