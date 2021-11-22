import Layout from "../components/Layout";
import Back from "../components/Back";
import SelectPerson from "../components/SelectPerson";
import Modal from "../components/Modal";
import { useState, useCallback } from "react";
import { useRouter } from "next/router";
import { fetcher } from "../config/config";
import useSWR from "swr";
import Spinner from "../components/Spinner";

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
	if (!data) return <Spinner />;

	return (
		<>
			{showModal && (
				<Modal
					callBack={handleSubmit}
					title="แน่ใจหรือไม่ว่าจะส่งคำร้องขอ"
					description="เมื่อส่ง Request ไปหาแพทย์แล้วต้องรอจนกว่าจะถูกยอมรับจากแพทย์ ถึงจะได้เข้ารับการปรึกษา"
					setModal={setModal}
					showModal={showModal}
				/>
			)}

			<a className="">คุณได้เลือกเข้ารับการปรึกษากับ :</a>
			{/* {JSON.stringify(data[0])} */}
			<SelectPerson user={data[0]} />

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
					value={data[0].Message}
				/>
				<button className="button hover:ring-1 ring-indigo-300">
					Submit
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
