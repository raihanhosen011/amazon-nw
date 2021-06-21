import "../src/styles/globals.css";
import Layout from "../src/Layout";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Provider } from 'react-redux'
import { store } from '../app/store'

function MyApp({ Component, pageProps }) {
  return (
    <>
     <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>          
     </Provider>
    </>
  );
}

export default MyApp;