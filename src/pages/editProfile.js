import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import SearchPerson from "../components/SearchPerson";
import SearchTextWithFilter from "../components/SearchTextWithFilter";
import InputBox from "../components/InputBox";

export default function Home({ movies }) {
	return (
		<Layout>
			<Navbar />
			<form 
            // onSubmit={handleSubmit}
            >
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
                            <InputBox id="subDistrict" Name="Subdistrict" />
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
                            <InputBox id="postalCode" Name="Postal Code" />
						</div>
					</div>
                    <div className="container bg-red">
                        Payment
                    </div>
                    
				</div>
                    
			</form>
		</Layout>
	);
}
