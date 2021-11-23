import Layout from "../components/Layout";
import Back from "../components/Back";
import { fetcher } from "../config/config";
import useSWR from "swr";
import { useState } from "react";
export default function Home() {
	const { data, error } = useSWR("/api/login", fetcher);
	const [Doctor_username, setDoctor] = useState(
		window.localStorage.getItem("Doctor_username")
	);
	const [Patient_username, setPatient] = useState(
		window.localStorage.getItem("Patient_username")
	);
	if (typeof window !== "undefined") {
		if (!window.localStorage.getItem("Doctor_username")) {
			window.localStorage.setItem("Doctor_username", "user003");
			window.localStorage.setItem("Patient_username", "user001");
		}
	}

	const handleDoctor = (e) => {
		e.preventDefault();
		const value = e.target.value;
		setDoctor(value);
		if (typeof window !== "undefined") {
			window.localStorage.setItem("Doctor_username", value);
		}
	};
	const handlePatient = (e) => {
		e.preventDefault();
		const value = e.target.value;
		setPatient(value);
		if (typeof window !== "undefined") {
			window.localStorage.setItem("Patient_username", e.target.value);
		}
	};
	if (!data) return <p>Loading...</p>;

	return (
		<>
			Doctor :{" "}
			<select
				className="textbox"
				name="doctors"
				id="doctors"
				value={Doctor_username}
				onChange={handleDoctor}
			>
				{data.doctors.map(({ Username, Firstname, Lastname }) => (
					<option value={Username} key={Username}>
						{Firstname} {Lastname}
						{`(${Username})`}
					</option>
				))}
			</select>
			<br />
			Patient :
			<select
				className="textbox"
				name="patient"
				id="patient"
				value={Patient_username}
				onChange={handlePatient}
			>
				{data.patients.map(({ Username, Firstname, Lastname }) => (
					<option value={Username} key={Username}>
						{Firstname} {Lastname} {`(${Username})`}
					</option>
				))}
			</select>
		</>
	);
}

Home.getLayout = function getLayout(page) {
	return (
		<Layout>
			<Back />
			<p className="text-blue-900 text-3xl font-bold text-center">
				Login As
			</p>
			{page}
		</Layout>
	);
};
