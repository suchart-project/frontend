import React,{ useState } from "react";

export default function Layout({ children,padding }) {
	return (
		<div className="min-h-screen relative bg-gray-50">
			<div className={`flex container mx-auto  gap-6 flex-col p-${padding || '6'}`}>
				{children}
			</div>
		</div>
	);
}
