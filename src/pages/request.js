import Layout from "../components/Layout";
import Back from "../components/Back";
import SearchPerson from "../components/SearchPerson";
import Modal from "../components/Modal";
import { useState } from "react";
export default function Home({ movies }) {
	const [showModal, setModal] = useState(false);
	const handleSubmit = (e) => {
		alert("เรียบร้อยฮะ");
	};
	return (
		<Layout>
			{showModal && (
				<Modal
					callBack={handleSubmit}
					title="แน่ใจหรือไม่ว่าจะส่งคำร้องขอ"
					description="หากส่งคำร้องขอแล้วคุณจะไม่สามารถยกเลิกได้ และต้องรอจนกว่าแพทย์จะตอบรับถึงจะ"
					setModal={setModal}
				/>
			)}
			<Back />
			<p className="text-blue-900 text-3xl font-bold text-center">
				Fill in your syntoms
			</p>
			<a className="">คุณได้เลือกเข้ารับการปรึกษากับ :</a>
			<SearchPerson />
			<a className="">อาการของท่าน :</a>
			<form
				className="flex flex-col gap-6 "
				onSubmit={(e) => {
					e.preventDefault();
					setModal(true);
				}}
			>
				<textarea
					type="text"
					className="textbox h-32 "
					placeholder="กรุณากรอกอาการของท่าน"
				/>
				<button className="button hover:ring-1 ring-indigo-300">
					Submit
				</button>
			</form>
		</Layout>
	);
}
