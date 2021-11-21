import React, { useState } from "react";

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => setIsOpen(!isOpen);
	return (
		<>
			<div
				className={`bg-indigo-500 w-3/4 text-gray-50 py-7 px-2 space-y-6 left-0 z-10 absolute inset-y-0 transform transition duration-300 ease-in-out ${
					isOpen ? "" : "-translate-x-full"
				}`}
			>
				<div className="flex flex-col w-full p-2 gap-1 items-center justify-center">
					<div className="flex items-center mb-6 w-full text-white text-3xl">
						<div className=" flex-1 font-bold text-gray-50">
							<a>Medmyday</a>
						</div>
						<div className="menu" onClick={toggle}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-6 w-6 "
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M10 19l-7-7m0 0l7-7m-7 7h18"
								/>
							</svg>
						</div>
					</div>
					<div className="menu text-center w-full">Menu1</div>
					<div className="menu text-center w-full">Menu2</div>
				</div>
			</div>
			<div>
				<div
					className="text-black  font-bold hover:bg-gray-200  rounded-md p-2 w-10"
					onClick={toggle}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-6 w-6"
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
			</div>
		</>
	);
}
