import React from "react";
// import Image from "next/image";w3
import { useRouter } from "next/router";
import Link from "next/link";
export default function SearchPerson({ photoURL, userData: user, uid }) {
	user = user || { firstName: "Piyaphat", lastName: "Pinyo" };

	return (
		<div className="bg-white  rounded-md px-6 py-4  shadow-md ">
			<div className="flex flex-row items-center">
				<img
					src={
						photoURL ||
						"https://www.travelswithsun.com/wp-content/uploads/Animation-Square-At-Movie-Animation-Park-Studios-Theme-Park.jpg"
					}
					className="w-24 h-24 rounded-md object-cover"
				/>
				<div className="flex-1  mx-4 overflow-x-hidden  h-26 flex flex-col">
					<a className="font-bold text-md">
						{user.firstName} {user.lastName}
					</a>
					<a className="text-sm  ">
						{user.firstName} {user.lastName}
					</a>
					<a className="text-sm ">
						{user.firstName} {user.lastName}
					</a>
					<a className="text-sm ">
						{user.firstName} {user.lastName}
					</a>
					<a
						className="self-end text-sm text-gray-500 hover:text-gray-300"
						onClick={(e) => {
							e.preventDefault();
							alert("aa");
						}}
					>
						ดูรายละเอียดเพิ่มเติม..
					</a>
				</div>
			</div>
		</div>
	);
}