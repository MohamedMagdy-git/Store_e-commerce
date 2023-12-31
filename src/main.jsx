import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import {persistor, store} from './components/Store/Store.jsx'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate  persistor={persistor} loading={'loading...'}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
)
