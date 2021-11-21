import Layout from "../components/Layout";
import Back from "../components/Back";
import { useState } from "react";
import { useRouter } from "next/router";

export default function Home({}) {
	const [data, setdata] = useState({});
	const router = useRouter();
	const [isError, setError] = useState(false);
	const handleSubmit = async (e) => {
		e.preventDefault();
		const result = await fetch(`/api/user`, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(data),
		});
		if (result.status >= 400) {
			setError(true);
			return;
		}
		alert("สมัครสมาชิกสำเร็จ");
		router.push("/login");
	};
	const handleChange = (e) => {
		setdata({ ...data, [e.target.id]: e.target.value });
	};
	return (
		<Layout>
			<Back />
			<p className="text-blue-900 text-3xl font-bold text-center">
				Register
			</p>
			<form onSubmit={handleSubmit}>
				<div className="flex flex-col gap-6">
					{isError && (
						<span className="text-red-500">
							กรุณากรอกข้อมูลให้ถูกต้อง
						</span>
					)}
					<div>
						<label className="block text-gray-700 text-sm font-bold mb-2">
							Username
						</label>
						<input
							onChange={handleChange}
							className="textbox"
							id="username"
							type="text"
							placeholder="Username"
						/>
					</div>
					<div>
						<label className="block text-gray-700 text-sm font-bold mb-2">
							Password
						</label>
						<input
							className="textbox"
							id="password"
							type="text"
							placeholder="Password"
						/>
					</div>
					<div>
						<label className="block text-gray-700 text-sm font-bold mb-2">
							Confirm
						</label>
						<input
							className="textbox"
							id="Confirm"
							type="text"
							placeholder="Confirm"
						/>
					</div>
					<div className="flex flex-row gap-6">
						<div className="flex-1">
							<label className="block text-gray-700 text-sm font-bold mb-2">
								ขื่อจริง
							</label>
							<input
								className="textbox"
								id="firstName"
								type="text"
								placeholder="ชื่อจริง"
							/>
						</div>
						<div className="flex-1">
							<label className="block text-gray-700 text-sm font-bold mb-2">
								นามสกุล
							</label>
							<input
								className="textbox"
								id="lastName"
								type="text"
								placeholder="นามสกุล"
							/>
						</div>
					</div>
					<div>
						<label className="block text-gray-700 text-sm font-bold mb-2">
							Email
						</label>
						<input
							className="textbox"
							id="Email"
							type="text"
							placeholder="example@gmail.com"
						/>
					</div>
					<button className="button hover:ring-1 ring-indigo-300">
						Next
					</button>
				</div>
			</form>
		</Layout>
	);
}
