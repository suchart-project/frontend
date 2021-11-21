import React from "react";
export default function InputBox({ id, placholder, Name, type, setData }) {
	const handleChange = (e) => {
		setData((data) => ({ ...data, [e.target.id]: e.target.value }));
	};
	return (
		<div>
			<label className="block text-gray-700 text-sm font-bold mb-2">
				{Name}
			</label>
			<input
				className="textbox"
				id={id}
				onChange={handleChange}
				type={type ? type : "text"}
				placeholder={placholder ? placholder : Name}
			/>
		</div>
	);
}
