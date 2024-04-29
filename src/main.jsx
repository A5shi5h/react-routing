import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import User from './components/User/User'
import Github from './components/Github/Github'

const router = createBrowserRouter([
  {
    path:'/',
    element : <Layout />,
    children :[
      {
        path :'',
        element : <Home />
      },
      {
        path :"about",
        element :<About />
      },
      {
        path:"contact",
        element: <Contact />
      },
      {
        path:"github",
        element: <Github />
      },
      {
        path:"user/:userid",
        element : <User />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router ={router}/>
  </React.StrictMode>,
)