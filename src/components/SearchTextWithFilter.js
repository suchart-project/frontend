import React from "react";

export default function SearchTextWithFilter({ text }) {
	return (
		text && (
			<div className="flex flex-row justify-between items-center px-4">
				<a className="text-xl ">{text}</a>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-6 w-6 text-gray-500"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M4 6h16M4 12h16M4 18h16"
					/>
				</svg>
			</div>
		)
	);
}
