import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

function MyApp({ Component, pageProps }) {
  return (
    <div className='main-wrapper'>
    <div className='container'>

      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
    </div>
  );
}

export default MyApp;
