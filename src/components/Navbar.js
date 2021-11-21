import React, { useState } from "react";
import Link from "next/link";
export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => setIsOpen(!isOpen);
	return (
		<>
			<div
				className={`bg-indigo-500 w-3/4 md:w-64   text-gray-50 py-7 px-2 space-y-6 left-0 z-20 fixed inset-y-0 transform transition duration-300 ease-in-out ${
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
					<Link href="/">
						<div className="menu text-center w-full">Home</div>
					</Link>
					<Link href="/consulation">
						<div className="menu text-center w-full">
							consultation
						</div>
					</Link>
					<Link href="/history">
						<div className="menu text-center w-full">History</div>
					</Link>
				</div>
			</div>
			{isOpen && (
				<div
					className="fixed w-full h-screen inset-y-0  inset-x-0 z-10 "
					onClick={toggle}
				></div>
			)}
			<div>
				<div className="icon w-10 text-gray-500" onClick={toggle}>
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
