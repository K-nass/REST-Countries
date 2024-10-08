import './index.css'
import Home from './Components/Home/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Components/layout/Layout'
import CardDetails from './Components/cardDetails/CardDetails'
import CountryNameContextProvider from './Components/countryContext/CountryContext'
import NotFound from './Components/NotFound/NotFound'


function App() {
  let router = createBrowserRouter([
    {
      path: '/', element: <Layout />, children: [
        { index: true, element: <Home /> },
        { path: 'CardDetails', element: <CardDetails /> },
        { path: '*', element: <NotFound /> }
      ]
    }
  ])
  return (
    <>
      <CountryNameContextProvider>
        <RouterProvider router={router}></RouterProvider>
      </CountryNameContextProvider>
    </>
  )
}

export default App
