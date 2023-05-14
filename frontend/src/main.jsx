import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { FilterProvider } from './context/FiltersContext.jsx'
import { DataProvider } from './context/DataContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <DataProvider>
    <FilterProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </FilterProvider>
  </DataProvider>
)