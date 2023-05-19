import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { FilterProvider } from "./context/FiltersContext.jsx";
import { DataProvider } from "./context/DataContext.jsx";
import { UserProvider } from "./context/userContext.jsx";
import { CartProvider } from "./context/cart.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <UserProvider>
      <DataProvider>
    <CartProvider>
        <FilterProvider>
          <React.StrictMode>
            <App />
          </React.StrictMode>
        </FilterProvider>
    </CartProvider>
      </DataProvider>
    </UserProvider>
);
