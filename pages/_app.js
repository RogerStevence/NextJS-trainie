import '../app/globals.css';
import Header from '../components/Header';
import Hero from '../components/Hero';

export default function App({ Component, pageProps }) {
    return (
    <>
    <Header />
    <Component {...pageProps} />
    </>
    );
}