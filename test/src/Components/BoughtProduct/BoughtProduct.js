import React from 'react';
import {Typography, Divider} from "antd";
import ProductInfo from "../ProductInfo/ProductInfo";

export default function BoughtProduct(){

    const {Title} = Typography;

    return (
        <div className={'d-flex justify-content-center flex-column align-items-center text-center mt-5 pt-5 w-75 m-auto'}>

            <div className={'text-center w-50'}>
                <Title level={2}>The product has been payed succesfully!</Title>
            </div>
            <ProductInfo/>
        </div>
    )
}
