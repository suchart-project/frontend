import "../styles/globals.css";
import Head from "next/head";
function MyApp({ Component, pageProps }) {
	const getLayout = Component.getLayout || ((page) => page);

	if (typeof window !== "undefined") {
		if (!window.localStorage.getItem("Doctor_username")) {
			window.localStorage.setItem("Doctor_username", "user001");
		}
		if (!window.localStorage.getItem("Patient_username")) {
			window.localStorage.setItem("Patient_username", "user003");
		}

		return (
			<>
				<Head>
					<title>Med My Day</title>
					<meta name="theme-color" content="#6366f1" />
				</Head>
				{getLayout(<Component {...pageProps} />)}
			</>
		);
	} else {
		return "Loading...";
	}
}

export default MyApp;
