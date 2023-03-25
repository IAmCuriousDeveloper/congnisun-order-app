import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import Index from './components/Index'
import EditOrder from './components/EditOrder'
import AddOrder from './components/AddOrder'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from 'react-router-dom'
const root = ReactDOM.createRoot(document.getElementById('root'))
const router = createBrowserRouter([
  {
    path: '/',
    element: <Index />,
  },
  {
    path: 'addOrder',
    element: <AddOrder />,
  },
  {
    path: 'editOrder/:id',
    element: <EditOrder />,
  },
])

root.render(<RouterProvider router={router} />)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
