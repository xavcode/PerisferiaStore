import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { FilterProvider } from './context/FiltersContext.jsx'
import { DataProvider } from './context/DataContext.jsx'
import { UserProvider } from './context/userContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <UserProvider>
    <DataProvider>
      <FilterProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </FilterProvider>
    </DataProvider>
  </UserProvider>
)