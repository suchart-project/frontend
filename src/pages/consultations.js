import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import ConsultationBox from "../components/ConsultationBox";
import useSWR from "swr";
import Spinner from "../components/Spinner";
import { fetcher } from "../config/config";
export default function Home() {
	const { data, error } = useSWR("/api/consultation", fetcher);
	if (error) return "Something went wrong";
	if (!data) return <Spinner />;
	return (
		<>
			<div className="divide-y divide-gray-200 ">
				{/* {JSON.stringify(data, null, 2)} */}
				{data.map((item, index) => (
					<div key={index} className="mt-2">
						<ConsultationBox
							destination="/consulatation"
							user={item}
						/>
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
				Consultations
			</p>
			{page}
		</Layout>
	);
};
