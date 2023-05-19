import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { FilterProvider } from './context/FiltersContext.jsx'
import { DataProvider } from './context/DataContext.jsx'
import { UserProvider } from './context/userContext.jsx'
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
  domain="dev-1gp8sh52ahddn5ih.us.auth0.com"
  clientId="D5YD6RCl6AqzDfamDmuxM0cvXYFQchpi"
  authorizationParams={{
    redirect_uri: window.location.origin
  }}
  >
  <UserProvider>
    <DataProvider>
      <FilterProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </FilterProvider>
    </DataProvider>
  </UserProvider>
  </Auth0Provider>
)