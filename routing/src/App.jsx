import { createContext, useState } from 'react';
import './App.css';
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Home from './component/Home.jsx';
import About from './component/About.jsx';
import Dashboard from './component/Dashboard.jsx';
import Navbar from './component/Navbar.jsx';
import Parapass from './component/Parapass.jsx';
import Courses from './component/Courses.jsx';
import Result from './component/Result.jsx';
import Not from './component/Not.jsx';
const router = createBrowserRouter(
  [
    {
      path: "/",
      element:
      <div>
        <Navbar/>
        <Home/>
      </div>
    },
    {
      path: "/about",
      element:
      <div>
      <Navbar/>
      <About/>
    </div>
    },
    {
      path: "/Dashboard",
      element:
      <div>
        <Navbar/>
        <Dashboard/>
      </div>,
      children:[
        {
          path:"courses",
          element:<Courses/>
        },
        {
          path:"result",
          element:<Result/>
        },
      ]
    },
    {
      path: "/student/:id",
      element:
      <div>
        <Navbar/>
        <Parapass/>
      </div>
    },
    {
      path:'*',
      element:<Not/>
    },
  ]
)
function App() {

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App;
