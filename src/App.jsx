import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Layout from './Layout'

const App = () => {
  const routes=createBrowserRouter([
    {
      path:"/",
      element:<Layout/>,
      children:[
        {
      path:"/",
      element:<Home/>
    },
    {
      path:"/about",
      element:<About/>
    },
    {
      path:"/projects",
      element:<Projects/>
    },
    {
      path:"/contact",
      element:<Contact/>
    }
      ]
    }
  ])
  return <RouterProvider router={routes}/>
}

export default App