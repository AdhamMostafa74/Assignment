import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import MainLayout from './Pages/Main Layout/MainLayout'
import About from './Pages/About/About'
import Portfolio from './Pages/Portfolio/Portfolio'
import Contact from './Pages/Contact/Contact'
import NotFound from './Pages/NotFound/NotFound'
import Home from './Pages/Home/Home'

function App() {

  const routes = createBrowserRouter([
    {
      path: '/', element: <MainLayout />, children: [

        { path: '', element: <Home /> },
        { path: 'About', element: <About /> },
        { path: 'Portfolio', element: <Portfolio /> },
        { path: 'Contact', element: <Contact /> },
        { path: '*', element: <NotFound /> }
      ]
    }
  ])
  return (
    <>
      <RouterProvider router={routes} />
    </>
  )
}

export default App
