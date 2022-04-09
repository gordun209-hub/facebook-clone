import './Home.css'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import App from './App'
import { store } from './app/store'
import Navbar from './components/Navbar'

const container = document.getElementById('root')
if (container) {
  const root = createRoot(container)
  root.render(
    <StrictMode>
      <BrowserRouter>
        <Provider store={store}>
          <Navbar />
          <App />
        </Provider>
      </BrowserRouter>
    </StrictMode>
  )
}
