import "../styles/globals.css";
import Head from "next/head";
function MyApp({ Component, pageProps }) {
	const getLayout = Component.getLayout || ((page) => page);
	return (
		<>
			<Head>
				<title>Med My Day</title>
				<meta name="theme-color" content="#6366f1" />
			</Head>
			{getLayout(<Component {...pageProps} />)}
		</>
	);
}

export default MyApp;
