import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ProductBuy from "./Components/ProductBuy/ProductBuy";
import './App.css';
import BoughtProduct from "./Components/BoughtProduct/BoughtProduct";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path={'/'} element={
                    <div className="App h-100 d-flex">
                        <ProductBuy/>
                    </div>
                }/>
                <Route path={'/boughtProduct'} element={<BoughtProduct/>}/>
            </Routes>

        </BrowserRouter>
    );
}

export default App;
