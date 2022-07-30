import { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/globals.scss';
import '../styles/hero.scss';
import '../styles/sliders.scss';
import 'swiper/scss';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
	return (
		<>
			<Head>
				<title>Next Starter</title>
				{/* <meta property='og:url' content='/'></meta> */}
				<meta property='og:locale' content='uk_UK'></meta>
			</Head>
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
