import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import {store} from './rtk/store'

import { GoogleOAuthProvider} from "@react-oauth/google";

const clientGoogleId ="352322921171-d4d962525ks3teot6lbvso9icmhv6gpo.apps.googleusercontent.com"
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Provider store={store}>
    <GoogleOAuthProvider clientId={clientGoogleId}>
      <App />
      </GoogleOAuthProvider>
      </Provider>
  </BrowserRouter>
)

// 78833519786-t82e449tkfukjsb529p3kvedfu3hn366.apps.googleusercontent.com
// 352322921171-d4d962525ks3teot6lbvso9icmhv6gpo.apps.googleusercontent.com
//a