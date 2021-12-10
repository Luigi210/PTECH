import React from 'react';
import Cards from "react-credit-cards";
import {Form, Input, Button} from "antd";
import validator from "validator";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import './FormBuy.css';


function FormBuy(props){
    const handleInputChange = (e) => {

        if (e.target.name === 'cvc'){
            e.target.value.length < 4 ? props.onCVC(e.target.value) : alert('Not Validated CVC!');
        }
        if (e.target.name === 'number') {
            let number = e.target.value.replace(/\W/gi, '').replace(/(.{4})/g, '$1 ').replace(/[A-Za-z]| /g, '');
            number ? props.onNumber(number): alert('Not Validated Number! Type numbers');
        }
        if (e.target.name === 'name'){
            e.target.value.match(/^[a-zA-Z\s]*$/) ? props.onName(e.target.value) : alert('Invalid! Enter the letters!');
        }
        if (e.target.name === 'expiry'){
            let today = new Date();
            let target = new Date(e.target.value);
            let month = target.getMonth() + 1;
            let year = target.getFullYear();
            today < target ? props.onExpiry(year.toString().substr(2) + '/' + month + '/' + target.getDate()) : alert('Not validated Expiration Date! CHANGE IT!');
        }
    }

    const checkBuy = () => {
        if (props.name !== '' && props.cvc !== '' && props.number !== '' && props.expiry !== '') {
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
                cvc={props.cvc}
                expiry={props.expiry}
                focus={props.focus}
                name={props.name}
                number={props.number}
            />
            <Form action={""}>
                <Input
                    type={"text"}
                    name={"number"}
                    placeholder={"Card Number"}
                    onChange={
                        (event) => handleInputChange(event)
                    }
                    required
                />
                <p>Valid Credit Card {!validator.isCreditCard(props.number.replace(/\s/g, ''))}</p>
                <Input
                    type={"number"}
                    name={"cvc"}
                    placeholder={"CVC"}
                    onChange={(event) => {
                        handleInputChange(event)
                    }}
                />
                <Input
                    type={"text"}
                    name={"name"}
                    placeholder={"Your Name"}
                    onChange={(event) => handleInputChange(event)}
                    required
                />
                <Input
                    type={"date"}
                    name={"expiry"}
                    placeholder={"Expire Date"}
                    onChange={(event) => handleInputChange(event)}
                    required
                />
            </Form>
            <Link to={'/boughtProduct'} type={'submit'} className={'btn btn-primary'}>Submit</Link>

        </div>
    )
}


function mapStateToProps(state){
    return {
        cvc: state.cvc,
        expiry: state.expiry,
        name: state.name,
        number: state.number
    }
}

function mapDispatchToProps(dispatch){
    return {
        onCVC: (cvc) => {
            dispatch( {type: 'CVC', value: cvc})
        },
        onExpiry: (expiry) => {
            dispatch({type: 'Expiry', value: expiry})
        },
        onName: (name) => {
            dispatch( {type: 'Name', value: name} )
        },
        onNumber: (number) => {
            dispatch( {type: 'Number', value: number} )
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormBuy);
