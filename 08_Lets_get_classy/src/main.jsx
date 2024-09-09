import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import About from './Components/AboutClass.jsx'
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Contact from './Components/Contact.jsx'
import Profile from './Components/Profile.jsx'

const router = createBrowserRouter([
    {
      path:"/",
      element:<App/>,
      children:[
        {
            path:"/about",
            element:<About/>
        },
        {
            path:"/contact",
            element:<Contact/>
        },
        {
            path:"/profile",
            element:<Profile/>
        }
      ]
    },
   
  ])

createRoot(document.getElementById('root')).render(
<RouterProvider router={router}/>
)
