import InputBox from "../components/InputBox";
import Navbar from "../components/Navbar";

export default function Home({ movies }) {
	return (
		<div className="min-h-screen relative bg-gray-50">
			<div className="flex container mx-auto  gap-6 flex-col p-4">
				<Navbar />

				<form
				// onSubmit={handleSubmit}
				>
					<div className="p-2">
						<div className="flex flex-col gap-6">
							<InputBox id="username" Name="Username" />
							<InputBox id="ssn" Name="SSN" />
							<InputBox id="surname" Name="Surname" />
							<InputBox id="birthdate" Name="Birthday" />
							<div className="flex flex-row gap-6">
								<div className="flex-1">
									<InputBox id="age" Name="Age" />
								</div>
								<div className="flex-1">
									<InputBox id="gender" Name="Gender" />
								</div>
							</div>
							<InputBox id="email" Name="Email" />
							<InputBox id="phoneNumber" Name="Phone number" />
							<InputBox id="address" Name="Address" />
							<InputBox id="street" Name="Street" />
							<div className="flex flex-row gap-6">
								<div className="flex-1">
									<InputBox
										id="subDistrict"
										Name="Subdistrict"
									/>
								</div>
								<div className="flex-1">
									<InputBox id="district" Name="District" />
								</div>
							</div>
							<div className="flex flex-row gap-6">
								<div className="flex-1">
									<InputBox id="province" Name="Province" />
								</div>
								<div className="flex-1">
									<InputBox
										id="postalCode"
										Name="Postal Code"
									/>
								</div>
							</div>
							<div>Payment</div>
							<InputBox
								id="creditCardNumber"
								Name="Credit Card Number"
							/>
							<InputBox
								id="cardHolderName"
								Name="Card Holder Name"
							/>
							<InputBox
								id="cardExpirationDate"
								Name="Card Expiration Date"
							/>
							<div className="relative">
								<div className="absolute right-0 text-gray-700 text-sm font-bold mb-2">
									Change password
								</div>
							</div>
							<button className="button hover:ring-1 ring-indigo-300">
								Save Changes
							</button>
						</div>
					</div>

					<div className="border border-3 border-gray-300 rounded border-opacity-100 p-2 flex flex-col mt-4">
						<div className="text-gray-700 text-sm font-bold mb-2">
							Delete My Account
						</div>
						<div className="border-t border-t-3 h-2.5 border-opacity-100 border-gray-300"></div>
						<button className="button hover:ring-1 ring-indigo-300 bg-red-400">
							Delete My Account
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}
