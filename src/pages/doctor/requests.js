import Layout from "../../components/Layout";
import Back from "../../components/Back";

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
