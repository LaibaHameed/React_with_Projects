import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import Menu from './components/Menu/Menu.jsx'
import Reservation from './components/Reservation/Reservation.jsx'
import Contact_Us from './components/Contact_Us/Contact_Us.jsx'
import User from './components/User/User.jsx'
import Github, { GithubInfoLoader } from './components/Github/Github.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        path: '',
        element: <Home/> 
      },
      {
        path: 'menu',
        element: <Menu/> 
      },
      {
        path: 'reserve',
        element: <Reservation/> 
      },
      {
        path: 'contact',
        element: <Contact_Us/>
      },
      {
        path: 'user/:userId',
        element: <User/>
      },
      {
        path: 'github',
        element: <Github/>,
        loader: GithubInfoLoader
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
