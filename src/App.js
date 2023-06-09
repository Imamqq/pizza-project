import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./pages/Home";
import "./scss/app.scss"
import NoFound from "./pages/NoFound";
import Cart from "./pages/cart";
import { useState } from "react";
import { createContext } from "react";



export const SearchContext = createContext('')

function App() {


  const [searchValue, setSearchValue] = useState('')
  return (
    <div className="wrapper">
      <SearchContext.Provider value={{ searchValue, setSearchValue }}>
        <Header />

        <div className="content">
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="*" element={<NoFound />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>

          </div>
        </div>
      </SearchContext.Provider>
    </div >
  );
}

export default App;
