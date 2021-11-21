import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import SearchPerson from "../components/SearchPerson";
export default function Home({ movies }) {
	const handleSubmit = (e) => {
		e.preventDefault();
		alert("asdfasdf");
	};
	return (
		<Layout>
			<Navbar />
			<p className="text-blue-900 text-3xl font-bold text-center">
				Fill in your syntoms
			</p>
			<a className="">คุณได้เลือกเข้ารับการปรึกษากับ :</a>
			<SearchPerson />
			<a className="">อาการของท่าน :</a>
			<form className="flex flex-col gap-6 " onSubmit={handleSubmit}>
				<textarea type="text" className="textbox h-64 " />
				<button className="button hover:ring-1 ring-indigo-300">
					Submit
				</button>
			</form>
		</Layout>
	);
}
