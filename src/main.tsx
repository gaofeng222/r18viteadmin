import React from 'react';
import ReactDOM from 'react-dom/client'
import 'reset-css'
import '@/styles/index.scss'
import Router from '@/router'
import { BrowserRouter } from 'react-router-dom';
import App from '@/App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <Router />
     */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
    
  </React.StrictMode>,
)
