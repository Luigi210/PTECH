import React from 'react';
import ProductInfo from "../ProductInfo";

export default function BoughtProduct(){
    return (
        <div className={'d-flex justify-content-center flex-column align-items-center text-center mt-5 pt-5 w-75 m-auto'}>

            <div className={'text-center w-50'}>
                <h2>The product has been payed succesfully!</h2>
            </div>
            <ProductInfo/>
        </div>
    )
}
