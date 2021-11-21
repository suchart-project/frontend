import Layout from "../components/Layout";
import Back from "../components/Back";

export default function Home({ movies }) {
	return (
		<Layout>
			<Back />
			<p className="text-blue-900 text-3xl font-bold text-center">
				Register
			</p>
			<div className="flex flex-col gap-6">
				<div>
					<label
						class="block text-gray-700 text-sm font-bold mb-2"
						for="username"
					>
						Username
					</label>
					<input
						class="textbox"
						id="username"
						type="text"
						placeholder="Username"
					/>
				</div>
				<div>
					<label
						class="block text-gray-700 text-sm font-bold mb-2"
						for="password"
					>
						Password
					</label>
					<input
						class="textbox"
						id="password"
						type="text"
						placeholder="Password"
					/>
				</div>
				<div>
					<label
						class="block text-gray-700 text-sm font-bold mb-2"
						for="Confirm"
					>
						Confirm
					</label>
					<input
						class="textbox"
						id="Confirm"
						type="text"
						placeholder="Confirm"
					/>
				</div>
				<div className="flex flex-row gap-6">
					<div className="flex-1">
						<label
							class="block text-gray-700 text-sm font-bold mb-2"
							for="firstName"
						>
							ขื่อจริง
						</label>
						<input
							class="textbox"
							id="firstName"
							type="text"
							placeholder="ชื่อจริง"
						/>
					</div>
					<div className="flex-1">
						<label
							class="block text-gray-700 text-sm font-bold mb-2"
							for="lastName"
						>
							นามสกุล
						</label>
						<input
							class="textbox"
							id="lastName"
							type="text"
							placeholder="นามสกุล"
						/>
					</div>
				</div>
				<div>
					<label
						class="block text-gray-700 text-sm font-bold mb-2"
						for="Email"
					>
						Email
					</label>
					<input
						class="textbox"
						id="Email"
						type="text"
						placeholder="example@gmail.com"
					/>
				</div>
			</div>
		</Layout>
	);
}
