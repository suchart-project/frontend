import React from "react";

export default function FilterMenu({ setFilter, title }) {
	return (
		<div className="filter">
			<label className="flex items-center my-1">
				<input
					type="checkbox"
					className="form-checkbox h-5 w-5 text-orange-600"
					onChange={(e) =>
						setFilter((data) => ({
							...data,
							[title]: e.target.checked,
						}))
					}
				/>
				<span className="ml-6 flex-1 text-gray-700">{title}</span>
			</label>
		</div>
	);
}
