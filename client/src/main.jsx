
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';

import { StrictMode } from 'react'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <ToastContainer
      position="top-right"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="colored"
      // transition: "bounce"
      />
  </StrictMode>
)
