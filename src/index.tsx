import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './components/App';
import { FormContextProvider } from './components/FormContext';

const root = createRoot(document.querySelector('#root') as Element);
root.render(
  <FormContextProvider>
    <App />
  </FormContextProvider>
);
