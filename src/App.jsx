import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import Body from './Components/Body'
import { createBrowserRouter } from 'react-router-dom'
import MainContainer from './Components/MainContainer'
import Watch from './Components/Watch'
import { RouterProvider } from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)
  
  const appRouter = createBrowserRouter([{
    path:'/',
    element :<Body/>,
    children:[
        {
          path:'/',
          element:<MainContainer/>
        },
        {
          path:'/watch',
          element:<Watch/>
        },
    ]
  }])
  return (
    <>
      <Header/>
      <RouterProvider router={appRouter}/>
    </>
  )
}

export default App
