import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './component/home/Home.jsx'
import About from './component/about/About.jsx'
import Contact from './component/contact/Contact.jsx'
import User from './component/user/User.jsx'
import Github, { githubInfoLoader } from './component/github/Github.jsx'

// method 1
/*
const router = createBrowserRouter([
  {
    path : '/',
    element : <App/>,
    children:[
      {
        path : "",
        element: <Home/>
      },
      {
        path : "about",
        element: <About/>
      },
      {
        path : "contact",
        element: <Contact/>
      },
    ]
  }
])
*/

// method 2

const routers = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element ={<App/>} >

      <Route path ='' element = {<Home/>}/>
      <Route path ='about' element = {<About/>}/>
      <Route path ='contact' element = {<Contact/>}/>
      
      <Route 
      loader={githubInfoLoader}
      path ='github' element = {<Github/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(

  <RouterProvider router={routers}/>
)
