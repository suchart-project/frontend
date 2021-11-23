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

	const handleDoctor = (e) => {
		e.preventDefault();
		const value = e.target.value;
		setDoctor(value);
	};
	const handlePatient = (e) => {
		e.preventDefault();
		const value = e.target.value;
		setPatient(value);
	};
	const handleSave = () => {
		if (typeof window !== "undefined") {
			window.localStorage.setItem("Patient_username", Patient_username);
			window.localStorage.setItem("Doctor_username", Doctor_username);
			alert("บันทึกสำเร็จ");
		} else {
			alert("ไม่สามารถบันทึกสถานะได้");
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
			<button className="button" onClick={handleSave}>
				Save
			</button>
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
