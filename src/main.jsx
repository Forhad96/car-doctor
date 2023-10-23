
import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import Routes from './Routes/Router.jsx'

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className='max-w-6xl mx-auto'>
    <React.StrictMode>
      <RouterProvider router={Routes}></RouterProvider>
    </React.StrictMode>
    
  </div>
);
