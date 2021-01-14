import { Provider } from 'react-redux'
import 'bootstrap/scss/bootstrap.scss';

import { useStore } from "../store/store";
import '../styles/globals.scss'

export default function MyApp({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);

  return   <Provider store={store}>
    <Component {...pageProps} />
  </Provider>
}
