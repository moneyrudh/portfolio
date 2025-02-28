import '../styles/globals.css';
import { courierPrime } from '../utils/fonts';

function MyApp({ Component, pageProps }) {
  return (
    <main className={courierPrime.className}>
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;