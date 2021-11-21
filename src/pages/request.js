import Layout from "../components/Layout";
import Back from "../components/Back";
import SelectPerson from "../components/SelectPerson";
import Modal from "../components/Modal";
import { useState } from "react";
import { useRouter } from "next/router";
import { fetcher } from "../config/config";
import useSWR from "swr";
import Spinner from "../components/Spinner";

export default function Home({}) {
	const [showModal, setModal] = useState(false);
	const [text, setText] = useState("");
	const router = useRouter();
	const { username } = router.query;

	const { data, error } = useSWR("/api/user?username=" + username, fetcher);
	if (error) return "Something went wrong";
	if (!data) return <Spinner />;

	const handleSubmit = () => {
		setModal(false);
		router.push("/requests");
	};

	return (
		<Layout>
			{showModal && (
				<Modal
					callBack={handleSubmit}
					title="แน่ใจหรือไม่ว่าจะส่งคำร้องขอ"
					description="เมื่อส่ง Request ไปหาแพทย์แล้วต้องรอจนกว่าจะถูกยอมรับจากแพทย์ ถึงจะได้เข้ารับการปรึกษา"
					setModal={setModal}
					showModal={showModal}
				/>
			)}
			<Back />
			<p className="text-blue-900 text-3xl font-bold text-center">
				Fill in your symptoms
			</p>
			<a className="">คุณได้เลือกเข้ารับการปรึกษากับ :</a>

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
					value={text}
					onChange={(e) => setText(e.target.value)}
				/>
				<button className="button hover:ring-1 ring-indigo-300">
					Submit
				</button>
			</form>
		</Layout>
	);
}

export async function getServerSideProps(context) {
	const { username } = context.query;
	if (!username) return { redirect: { destination: "/" } };
	return { props: {} };
}
