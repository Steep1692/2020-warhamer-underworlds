import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import "./index.scss";
import { Provider } from 'react-redux'
import {store} from './store/Store'
import i18n from "./i18n/i18n";
import {I18nextProvider} from 'react-i18next'
import { Suspense } from 'react';

const Loading = () => {
  return <div>Loading...</div>
};

ReactDOM.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <Suspense fallback={<Loading/>}>
        <Provider store={store}>
          <App />
        </Provider>
      </Suspense>
    </I18nextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
