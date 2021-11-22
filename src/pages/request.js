import Layout from "../components/Layout";
import Back from "../components/Back";
import SelectPerson from "../components/SelectPerson";
import ModalRed from "../components/ModalRed";
import { useState, useCallback } from "react";
import { useRouter } from "next/router";
import { fetcher } from "../config/config";
import useSWR from "swr";
import Spinner from "../components/Spinner";
import SearchPersonLoad from "../components/Skeleton/SearchPersonLoad";

export default function Home() {
	const [showModal, setModal] = useState(false);
	const router = useRouter();
	const { Request_id } = router.query;

	const handleSubmit = useCallback(async () => {
		setModal(false);
		try {
			fetch("/api/request", {
				method: "DELETE",
				body: JSON.stringify({
					Request_id,
				}),
				headers: {
					"Content-Type": "application/json",
					// 'Content-Type': 'application/x-www-form-urlencoded',
				},
			});
		} catch {
			alert("Something went wrong");
		} finally {
			router.push("/requests");
		}
	}, [Request_id]);

	const { data, error } = useSWR(
		"/api/request?Request_id=" + Request_id,
		fetcher
	);
	if (error || data?.length == 0) return "Something went wrong";

	return (
		<>
			{showModal && (
				<ModalRed
					callBack={handleSubmit}
					title="คุณแน่ใจหรือไม่ว่าจะต้องการจะยกเลิก"
					setModal={setModal}
					showModal={showModal}
				/>
			)}

			<a className="">คุณได้เลือกเข้ารับการปรึกษากับ :</a>
			{/* {JSON.stringify(data[0])} */}

			{!data || data.lenght == 0 ? (
				<SearchPersonLoad />
			) : (
				<SelectPerson user={data[0]} />
			)}
			<form
				className="flex flex-col gap-6 "
				onSubmit={(e) => {
					e.preventDefault();
					setModal(true);
				}}
			>
				<label className="block text-gray-700 text-sm font-bold">
					Symptoms
				</label>
				<textarea
					type="text"
					className="textbox h-32 "
					placeholder="กรุณากรอกอาการของท่าน"
					disabled
					value={data ? data[0].Message : ""}
				/>
				<button className="button hover:bg-red-700 ring-red-300 bg-red-500">
					Cancel
				</button>
			</form>
		</>
	);
}

export async function getServerSideProps(context) {
	const { Request_id } = context.query;
	if (!Request_id) return { redirect: { destination: "/" } };
	return { props: {} };
}

Home.getLayout = function getLayout(page) {
	return (
		<Layout>
			<Back />
			<p className="text-blue-900 text-3xl font-bold text-center">
				Request Information
			</p>
			{page}
		</Layout>
	);
};
