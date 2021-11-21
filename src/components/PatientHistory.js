import React from "react";
import Link from "next/link";
export default function PatientHistory({ firstName, lastName, uid }) {
	firstName = firstName || "Piyaphat";
	lastName = lastName || "Somchai";
	uid = uid || "123456789";
	return (
		<div className="flex flex-row py-2 items-center hover:bg-gray-200 p-4 rounded-sm transform duration-50 ease-linear hover:rounded-3xl hover:text-gray-700">
			<img
				src="https://i.pinimg.com/736x/0d/f5/8d/0df58d6e21f7236ffc4cabbde43ec03b.jpg"
				className="bg-cover rounded-full w-24 h-24"
			/>
			<div className="flex flex-row w-full">
				<div className="flex flex-col md:flex-row w-full ml-6 justify-between">
					<div className="font-bold">
						{firstName} {lastName}
					</div>
					<Link href={`?uid=${uid}`}>
						<a className="font-sm text-gray-500 hover:cursor-pointer hover:text-gray-700">
							ดูรายละเอียดเพิ่มเติม
						</a>
					</Link>
				</div>
			</div>
		</div>
	);
}
