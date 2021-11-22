import Layout from "../../components/Layout";
import Navbar from "../../components/Navbar";
import InputBox from "../../components/InputBox";
import useSWR from "swr";
import Link from "next/link";
import { fetcher } from "../../config/config";
import { useRouter } from "next/router";

export default function Home() {
	const router = useRouter();
	const { Request_id } = router.query;
	const { data, error } = useSWR(
		"/api/request?Request_id" + Request_id,
		fetcher
	);
	return (
		<Layout>
			<Navbar />
			{JSON.stringify(data, null, 2)}
			<form
			// onSubmit={handleSubmit}
			>
				<div className="flex flex-col gap-6">
					<InputBox disabled id="name" Name="Name" />
					<InputBox disabled id="surname" Name="Surname" />
					<div className="flex flex-row gap-6">
						<div className="flex-1">
							<InputBox disabled id="age" Name="Age" />
						</div>
						<div className="flex-1">
							<InputBox disabled id="gender" Name="Gender" />
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
							value={"ปวดหัวจังงื้อ"}
							onChange={(e) => setData(e.target.value)}
						/>
					</div>
					<Link href="/">
						<button className="button hover:bg-green-700 bg-green-500">
							Accept
						</button>
					</Link>
					<Link href="/">
						<button className="button hover:ring-1 ring-indigo-300 bg-red-500">
							Decline
						</button>
					</Link>
				</div>
			</form>
		</Layout>
	);
}
