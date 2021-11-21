import Layout from "../components/Layout";
import Back from "../components/Back";
import SearchPerson from "../components/SearchPerson";
import Modal from "../components/Modal";
import { useState } from "react";
import { useRouter } from "next/router";
export default function Home({ movies }) {
	return (
		<Layout>
			<Back />
			Tailwind CSS
		</Layout>
	);
}

export async function getServerSideProps(context) {
	console.log(context.query);
	return { props: {} };
}
