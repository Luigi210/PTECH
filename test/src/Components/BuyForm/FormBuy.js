import React, {useState} from 'react';
import Cards from "react-credit-cards";
import {Button} from "antd";
import './FormBuy.css';
import validator from "validator";
import {Link, Navigate} from "react-router-dom";

export default function FormBuy(){
    const [data, setData] = useState({
        cvc: "",
        expiry: "",
        name: "",
        number: ""
    })

    const handleInputChange = (e) => {

        if (e.target.name === 'cvc'){
            if (e.target.value.length < 4)  {
                setData({
                    ...data,
                    [e.target.name]: e.target.value
                })
            }
            else {
                alert('Not Validated CVC!');
            }

        }
        if (e.target.name === 'number') {
            setData({
                ...data,
                [e.target.name]: (e.target.value.replace(/\W/gi, '').replace(/(.{4})/g, '$1 ').replace(/[A-Za-z]| /g, ''))

            });
        }
        if (e.target.name === 'name'){

            e.target.value.match(/^[a-zA-Z\s]*$/) ? setData({
                ...data,
                [e.target.name]: e.target.value
            }) : alert('Invalid! Enter the letters!');
        }
        if (e.target.name === 'expiry'){
            let today = new Date();
            let target = new Date(e.target.value);
            let month = target.getMonth() + 1;
            let year = target.getFullYear();
            today < target ? setData({
                ...data,
                [e.target.name]: year.toString().substr(2) + '/' + month + '/' + target.getDate()
                }) : alert('Not validated Expiration Date! CHANGE IT!');
            console.log(target);
            console.log(month, year)
        }
    }

    const checkBuy = () => {
        if (data.name !== '' && data.cvc !== '' && data.number !== '' && data.expiry !== '') {
            return true
        }
        else {
            alert('Check again! Some Filed Missing!')
            return false
        }
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
                    type={"text"}
                    name={"number"}
                    placeholder={"Card Number"}
                    onChange={(event) => handleInputChange(event)}
                />
                <p>Valid Credit Card {!validator.isCreditCard(data.number.replace(/\s/g, ''))}</p>
                <input
                    type={"number"}
                    name={"cvc"}
                    placeholder={"CVC"}
                    // value={data.cvc}
                    onChange={(event) => {
                        handleInputChange(event)
                    }}
                />
                <input
                    type={"text"}
                    name={"name"}
                    placeholder={"Your Name"}
                    // value={data.name}
                    onChange={(event) => handleInputChange(event)}
                />
                <input
                    type={"date"}
                    name={"expiry"}
                    placeholder={"Expire Date"}
                    onChange={(event) => handleInputChange(event)}
                />
            </form>
            <Link to={'/boughtProduct'} type={'submit'} className={'btn btn-primary'}>Submit</Link>
        </div>
    )
}
