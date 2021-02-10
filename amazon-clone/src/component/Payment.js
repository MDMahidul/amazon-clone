import React, {useEffect, useState} from 'react';
import '../assets/css/Payment.css';
import {useStateValue} from "../StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import {Link,useHistory} from "react-router-dom";
import {CardElement ,useElements, useStripe} from "@stripe/react-stripe-js";
import {getBasketTotal} from "../reducer";
import CurrencyFormat from "react-currency-format";
import axios from '../axios';
import {db} from '../firebase';

function Payment(props) {
    const history = useHistory();
    const [{basket,user},dispatch]=useStateValue();

    const stripe = useStripe();
    const elements = useElements();

    const  [error,setError] = useState(null);
    const  [disabled,setDisable] =useState(true);
    const  [processing,setProcessing] = useState("");
    const  [succeeded,setSucceeded] = useState(false);
    const  [clientSecret,setClientSecret] = useState(true)

    useEffect(() => {
        //generate the special stripe secret which allows to charge a customer
        const getClientSecret = async ()=> {
            const response = await axios({
                method: 'post',
                //stripe expects the total in a currencies subunits
                url: `/payments/create?total=${getBasketTotal(basket) * 100}`
            });
            setClientSecret(response.data.clientSecret)
        }

        getClientSecret();
    },[basket])

    console.log('the secret is >>',clientSecret)

    const handleSubmit = async(event) =>{
        //stripe functionality
        event.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret,{
            payment_method:{
                card: elements.getElement(CardElement)
            }
        }).then(({paymentIntent})=>{
            //paymentIntent = payment confirmation

            setSucceeded(true);
            setError(null);
            setProcessing(false);

            dispatch({
                type:'EMPTY_BASKET'
            })

            history.replace('/orders');
        })
    }

    const  handleChange = event =>{
        //listen for changes in the cardelement
        //and display any errors as the customer types their card details
        setDisable(event.empty);
        setError(event.error ? event.error.message: "");
    }

    return (
        <div className='payment'>
            <div className="payment__container">
                <h1>
                    Checkout (
                        <Link to="/checkout">{basket.length} items</Link>
                    )
                </h1>
                {/* Payment section - delivery address*/}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment__address">
                        <p>{user?.email}</p>
                        <p>Namapara, Khilkhet</p>
                        <p>Dhaka, Bangladesh</p>
                    </div>
                </div>

                {/* Payment section - Review items */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review items and Delivery</h3>
                    </div>
                    <div className="payment__items">
                        {/* all the products */}
                        {basket.map(item =>(
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                </div>

                {/* Payment section - payment method */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment__details">
                        {/* stripe config will go here*/}
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange}/>

                            <div className="payment_priceContainer">
                                <CurrencyFormat
                                    renderText={(value) =>(
                                        <h3>Order Total: {value}</h3>
                                    )}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)} //hw
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"$"}
                                />
                                <button disabled={processing || disabled ||succeeded}>
                                    <strong>{processing ? <p>Processing</p> : "Buy Now"}</strong>
                                </button>
                            </div>

                            {/* errors*/}
                            {error && <div>{error}</div>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Payment;