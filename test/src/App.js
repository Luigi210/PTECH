import './App.css';
import {BrowserRouterProps, Routes, Route, Link} from "react-router-dom";
import ProductInfo from "./Components/ProductInfo";
import FormBuy from "./Components/BuyForm/FormBuy";

function App() {
    return (
        <div className="App h-100 d-flex">
            <ProductInfo/>
            <FormBuy/>
        </div>
    );
}

export default App;
