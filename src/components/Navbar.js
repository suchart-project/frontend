import React, { useState } from "react";
import Link from "next/link";
export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => setIsOpen(!isOpen);
	return (
		<>
			<div
				className={`bg-indigo-500 w-3/4 md:w-64  text-gray-50 py-12 px-2 space-y-6 left-0 z-20 fixed inset-y-0 transform transition duration-300 ease-in-out ${
					isOpen ? "" : "-translate-x-full"
				}`}
			>
				<div className="flex flex-col h-full justify-between">
					<div className="flex flex-col w-full p-2 gap-4 items-center justify-center">
						{isOpen && (
							<div
								className="menu absolute top-6 right-[-36px]  bg-indigo-500 hover:bg-indigo-500"
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
										d="M15 19l-7-7 7-7"
									/>
								</svg>
							</div>
						)}

						<Link href="/">
							<div className="menu text-left w-full">Home</div>
						</Link>
						<Link href="/consulation">
							<div className="menu text-left w-full">
								Consultation
							</div>
						</Link>
						<Link href="/history">
							<div className="menu text-left w-full">History</div>
						</Link>
						<div className="flex w-full flex-col justify-end ">
							<Link href="/register">
								<div className="self-end cursor-pointer hover:text-gray-200">
									Register
								</div>
							</Link>
							<Link href="/reset">
								<div className="self-end cursor-pointer hover:text-gray-200">
									Reset Password
								</div>
							</Link>
						</div>
					</div>
					<div className="items-center relative text-center  mb-6 w-full text-white text-3xl">
						<a className=" font-bold  text-gray-50">Medmyday</a>
					</div>
				</div>
			</div>
			{isOpen && (
				<div
					className="fixed w-full h-screen inset-y-0  inset-x-0 z-10 "
					onClick={toggle}
				></div>
			)}
			<div>
				<div className="icon w-12 text-gray-500" onClick={toggle}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-8 w-8"
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
