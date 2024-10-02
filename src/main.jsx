import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { router } from './routes.jsx'
import { RouterProvider } from 'react-router-dom'
import store from './redux/store.js'
import { Provider } from 'react-redux'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
