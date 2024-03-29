import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from '@tanstack/react-router'
import { router } from './router'
import { Provider } from 'react-redux'
import { store } from './stores'

import './assets/scss/styles.scss'
import './assets/css/all.css'
import './assets/css/style.css'
import './assets/css/custom.css'
import './assets/fonts/font-awesome/css/font-awesome.min.css'
import './assets/js/all.min.js'
import './assets/js/bootstrap.bundle.js'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
