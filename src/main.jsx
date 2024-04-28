import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import routers from '../src/router/routes.jsx'
import {RouterProvider} from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={routers}>    
  </RouterProvider>
    
  ,
)
