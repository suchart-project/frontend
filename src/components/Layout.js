import React from "react";

export default function Layout({ children }) {
	return (
		<div className="min-h-screen  bg-gray-50">
			<div className="flex container mx-auto  gap-6 flex-col p-6">
				{children}
			</div>
		</div>
	);
}
