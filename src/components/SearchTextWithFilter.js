import React, { useState } from "react";
import FilterMenu from "./FilterMenu";

export default function SearchTextWithFilter({ text, setFilter }) {
	const [showFilter, setShowFilter] = useState(false);
	const toggleMenu = () => setShowFilter(!showFilter);
	const filterOption = ["Location", "Online"];
	return (
		<div className="flex flex-row justify-between items-center px-4">
			<a className="text-xl ">{text || "ผลลัพธ์การค้นหาทั้งหมด"}</a>
			<div className="icon relative group" onClick={toggleMenu}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-5 w-5  text-gray-500"
					viewBox="0 0 20 20"
					fill="currentColor"
				>
					<path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z" />
				</svg>

				<div className="bg-white w-64  font-normal py-4 rounded-md absolute z-30 right-0 gap-2  flex flex-col px-4 transition-all duration-200 ease-in-out shadow-md scale-0 group-hover:scale-100">
					{filterOption.map((title, index) => (
						<FilterMenu
							key={index}
							setFilter={setFilter}
							title={title}
						/>
					))}
				</div>
			</div>
		</div>
	);
}
