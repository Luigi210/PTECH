import {BrowserRouterProps, Routes, Route, Link} from "react-router-dom";
import ProductBuy from "./Components/ProductBuy/ProductBuy";
import './App.css';
import React from "react";
import BoughtProduct from "./Components/BoughtProduct/BoughtProduct";

function App() {
    return (
        <>
            <Routes>
                <Route exact path={'/'} element={
                    <div className="App h-100 d-flex">
                        <ProductBuy/>
                    </div>
                }/>
                <Route path={'/boughtProduct'} element={<BoughtProduct/>}/>
            </Routes>

        </>
    );
}

export default App;
