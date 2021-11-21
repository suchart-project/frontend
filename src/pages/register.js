import Layout from "../components/Layout";
import Back from "../components/Back";

export default function Home({ movies }) {
	const handleSubmit = () => {
		alert("Register");
	};
	return (
		<Layout>
			<Back />
			<p className="text-blue-900 text-3xl font-bold text-center">
				Register
			</p>
			<form onSubmit={handleSubmit}>
				<div className="flex flex-col gap-6">
					<div>
						<label className="block text-gray-700 text-sm font-bold mb-2">
							Username
						</label>
						<input
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
