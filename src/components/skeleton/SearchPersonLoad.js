import React from "react";

export default function SearchPersonLoad() {
	return (
		<div className="bg-white   rounded-md px-6 py-4  cursor-pointer shadow-md hover:brightness-105 hover:text-gray-600">
			<div className="flex  animate-pulse flex-row items-center">
				<div className="w-24 h-24 bg-gray-400 rounded-md object-cover" />
				<div className="flex-1  mx-4  w-24 h-26 gap-2 flex flex-col">
					<div className="skel-3" />
					<div className="skel-1" />
					<div className="skel-1" />
					<div
						className="skel-2 self-end"
						onClick={(e) => {
							e.preventDefault();
							alert("ยังไม่เปิดใช้บริการ");
						}}
					></div>
				</div>
			</div>
		</div>
	);
}
