import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import SearchPerson from "../components/SearchPerson";
import SearchTextWithFilter from "../components/SearchTextWithFilter";
import SearchPersonLoad from "../components/skeleton/SearchPersonLoad";
import { useState, useCallback, useEffect, useRef } from "react";

export default function Home({}) {
	const input_textbox = useRef(null);
	const [text, setText] = useState("");
	const [filterOption, setFilterOption] = useState({
		Online: false,
		Location: false,
	});
	const [location, setLocation] = useState({ lat: 0, lng: 0 });
	const [users, setUsers] = useState([]);

	useState(() => {
		if ("geolocation" in navigator) {
			navigator.geolocation.getCurrentPosition(function (position) {
				setLocation({
					lat: position.coords.latitude,
					lng: position.coords.longitude,
				});
			});
		}
	}, [filterOption]);
	const changeFormat = (data) => {
		var listOfObjects = [];
		data.forEach(function (entry) {
			let found = false;
			listOfObjects.forEach((eachObject) => {
				if (eachObject.Username === entry.Username) {
					found = true;
					eachObject["Name"].push(entry["Name"]);
				}
			});
			if (!found) {
				var tmp = entry;
				var tmpName = entry["Name"];
				tmp["Name"] = [tmpName];
				listOfObjects.push(tmp);
			}
		});
		return listOfObjects;
	};
	useEffect(() => {
		const fetching = async () => {
			const response = await fetch(`/api/user`);
			const x = await Promise.resolve(response.json());
			setUsers(changeFormat(x));
		};
		fetching();
	}, []);
	useEffect(() => {
		if (input_textbox.current.value) {
			search(input_textbox.current.value);
		}
	}, [filterOption]);

	const search = useCallback(
		async (target) => {
			try {
				if (target === "" || target === undefined) {
					const response = await fetch(`/api/user`);
					const x = await Promise.resolve(response.json());
					setUsers(changeFormat(x));
					setFilterOption({
						Online: false,
						Location: false,
					});
				} else {
					const response = await fetch(
						`/api/user?SearchStr=${target}&OnlineFlag=${filterOption["Online"]}&DistanceFlag=${filterOption["Location"]}&Lat=${location?.lat}&Lng=${location?.lng}`,
						{
							method: "GET",
						}
					);
					const x = await Promise.resolve(response.json());
					setUsers(changeFormat(x[0]));
				}
			} catch {
				alert("Something went wrong");
			}
		},
		[filterOption]
	);
	return (
		<>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					search(e.target.searchbox.value);
					setText(e.target.searchbox.value);
				}}
			>
				<input
					className="textbox"
					name="searchbox"
					placeholder="ค้นหาแพทย์ โดย ชื่อ / อาการ / คลินิค"
					ref={input_textbox}
				/>
			</form>
			<SearchTextWithFilter
				text={text ? `All result for "${text}"` : null}
				setFilter={setFilterOption}
			/>
			{!users || users.length === 0
				? new Array(10)
						.fill(0)
						.map((_, index) => <SearchPersonLoad key={index} />)
				: users.map((user, index) => (
						<SearchPerson key={index} user={user} />
				  ))}
		</>
	);
}

Home.getLayout = function getLayout(page) {
	return (
		<Layout>
			<Navbar />
			<p className="text-blue-900 text-3xl font-bold text-center">
				Search physicians
			</p>
			{page}
		</Layout>
	);
};
