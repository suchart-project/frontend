import React from "react";
import { useRouter } from "next/router";
import { route } from "next/dist/server/router";
export default function Back() {
	const router = useRouter();
	return (
		<div
			className="icon w-10"
			onClick={() => {
				router.back();
			}}
		>
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
	);
}
