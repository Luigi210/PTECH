import React, {useState} from 'react';
import Cards from "react-credit-cards";
import {Button} from "antd";
import './FormBuy.css';

export default function FormBuy(){

    const [data, setData] = useState({
        cvc: "",
        expiry: "",
        name: "",
        number: ""
    })

    const handleInputChange = (e) => {
        setData({
           ...data,
           [e.target.name]: e.target.value
        });
    }



    return (
        <div id={'PaymentForm'}>
            <Cards
                cvc={data.cvc}
                expiry={data.expiry}
                focus={data.focus}
                name={data.name}
                number={data.number}
            />
            <form action={""}>
                <input
                    type={"number"}
                    name={"number"}
                    placeholder={"Card Number"}
                    onChange={(event) => handleInputChange(event)}
                />
                <input
                    type={"number"}
                    name={"cvv"}
                    placeholder={"CVC"}
                    onChange={(event) => handleInputChange(event)}
                />
                <input
                    type={"text"}
                    name={"name"}
                    placeholder={"Your Name"}
                    onChange={(event) => handleInputChange(event)}
                />
                <input
                    type={"date"}
                    name={"expiry"}
                    placeholder={"Expire Date"}
                    onChange={(event) => handleInputChange(event)}
                />
            </form>
            <Button type={'primary'} >Submit</Button>
        </div>
    )
}
