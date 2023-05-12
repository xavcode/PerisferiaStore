import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { FilterProvider } from './context/FiltersContext.jsx'
import { ProductsProvider } from './context/ProductsContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <ProductsProvider>
    <FilterProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </FilterProvider>
  </ProductsProvider>
)