import "@/styles/styles.css";

import type { AppProps } from "next/app";
import { UserProvider } from "@/UserContext";

const App = ({ Component, pageProps }: AppProps) => {
	return (
		<UserProvider>
		<Component {...pageProps} />
	</UserProvider>
	);
};

export default App;
