import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import {FormProvider} from './FormContext';

ReactDOM.render(
  <React.StrictMode>
   <FormProvider>
    <App />
   </FormProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

