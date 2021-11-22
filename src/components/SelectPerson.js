import React from "react";
// import Image from "next/image";w3

export default function SearchPerson({ user }) {
	return (
		<div className="bg-white  rounded-md px-6 py-4  cursor-pointer shadow-md hover:brightness-105 hover:text-gray-600">
			<div className="flex flex-row items-center">
				<img
					src={
						user.Img_path ||
						"https://www.travelswithsun.com/wp-content/uploads/Animation-Square-At-Movie-Animation-Park-Studios-Theme-Park.jpg"
					}
					className="w-24 h-24 rounded-md object-cover"
				/>
				<div className="flex-1  mx-4 overflow-x-hidden  h-26 flex flex-col">
					<a className="font-bold text-md">
						{user?.Firstname} {user?.Lastname}
					</a>
					<a className="text-sm  ">{user?.Name}</a>
					<a className="text-sm ">คลินิค: {user?.Clinic_name}</a>
					<a className="text-sm ">คะแนนเฉลี่ย {user?.Avg_rating}</a>
					<a
						className="self-end text-sm text-gray-500 hover:text-gray-300"
						onClick={(e) => {
							e.preventDefault();
							alert("ยังไม่เปิดใช้บริการ");
						}}
					>
						ดูรายละเอียดเพิ่มเติม..
					</a>
				</div>
			</div>
		</div>
	);
}
