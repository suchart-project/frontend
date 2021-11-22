import { useRouter } from "next/router";
import useSWR from "swr";
import Back from "../../components/Back";
import InputBox from "../../components/InputBox";
import Layout from "../../components/Layout";
import { fetcher } from "../../config/config";

export default function Home() {
	const router = useRouter();
	const { Request_id } = router.query;
	const { data, error } = useSWR(
		"/api/request?Request_id" + Request_id,
		fetcher
	);
	const calculate_age = (dob) => {
		var diff_ms = Date.now() - dob.getTime();
		var age_dt = new Date(diff_ms);
		return Math.abs(age_dt.getUTCFullYear() - 1970);
	};
	if (error || data?.length == 0) return "Something went wrong";
	if (!data) return null;
	const handleSubmit = async (order) => {
		console.log(order);
		try {
			fetch("/api/request", {
				method: "PUT",
				body: JSON.stringify({
					Request_id: Request_id,
					Status: order === "Accept" ? 1 : 2,
				}),
				headers: {
					"Content-Type": "application/json",
					// 'Content-Type': 'application/x-www-form-urlencoded',
				},
			});
		} catch {
			print();
			alert("Something went wrong");
		} finally {
			router.push("/doctor/requests");
		}
	};
	return (
		<form>
			<div className="flex flex-col gap-6">
				<InputBox
					disabled
					id="name"
					Name="Name"
					value={data[0].Firstname}
				/>
				<InputBox
					disabled
					id="surname"
					Name="Surname"
					value={data[0].Lastname}
				/>
				<div className="flex flex-row gap-6">
					<div className="flex-1">
						<InputBox
							disabled
							id="age"
							Name="Age"
							value={calculate_age(new Date(data[0].Birthdate))}
						/>
					</div>
					<div className="flex-1">
						<InputBox
							disabled
							id="gender"
							Name="Gender"
							value={data[0].Gender}
						/>
					</div>
				</div>
				<div>
					<label
						disabled
						className="block text-gray-700 text-sm font-bold mb-2"
					>
						Symptoms
					</label>
					<textarea
						disabled
						type="text"
						className="textbox h-32 "
						value={data[0].Message}
						onChange={(e) => setData(e.target.value)}
					/>
				</div>
				<button
					className="button hover:bg-green-700 bg-green-500"
					onClick={(e) => {
						handleSubmit("Accept");
						e.preventDefault();
					}}
				>
					Accept
				</button>
				<button
					className="button hover:bg-red-700 bg-red-500"
					onClick={(e) => {
						e.preventDefault();
						handleSubmit("Decline");
					}}
				>
					Decline
				</button>
			</div>
		</form>
	);
}

Home.getLayout = function getLayout(page) {
	return (
		<Layout>
			<Back />
			{page}
		</Layout>
	);
};
