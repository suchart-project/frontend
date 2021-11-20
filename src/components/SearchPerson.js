import React from "react";

export default function SearchPerson({ photoURL, userData: user }) {
	user = user || { firstName: "Piyaphat", lastName: "Pinyo" };
	return (
		<div className="bg-white  rounded-xl p-6 drop-shadow-sm">
			<div className="flex flex-row">
				<img
					src={
						photoURL ||
						"https://www.patsonic.com/wp-content/uploads/2018/06/incredibles-2-animation-featured.jpg"
					}
					className="w-28 h-28 rounded-xl"
				/>
				<div className="flex-1 h-28 mx-4 flex flex-col">
					<a className="font-bold">
						{user.firstName} {user.lastName}
					</a>
					<a>
						{user.firstName} {user.lastName}
					</a>
					<a>
						{user.firstName} {user.lastName}
					</a>
					<a>
						{user.firstName} {user.lastName}
					</a>
					<a className="self-end text-gray-500">
						ดูรายละเอียดเพิ่มเติม..
					</a>
				</div>
			</div>
		</div>
	);
}
