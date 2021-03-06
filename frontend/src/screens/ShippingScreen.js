import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { saveShippingAddress } from '../actions/cartActions';
import CheckoutSteps from '../components/CheckoutSteps';

export default function ShippingScreen(props) {
    const userSignin = useSelector((state)=>state.userSignin);
    const { userInfo } = userSignin;
    if(!userInfo){
        props.history.push('/signin');
    }
    const cart = useSelector((state)=>state.cart);
    const { shippingAddress } = cart;
    const [name, setName] = useState(shippingAddress.name);
    const [address, setAddress] = useState(shippingAddress.address);
    const [city, setCity] = useState(shippingAddress.city);
    const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
    const [country, setCountry] = useState(shippingAddress.country);
     
    const dispatch = useDispatch();
    const submitHandler = (e) =>{
        e.preventDefault();
        dispatch(saveShippingAddress({name, address, city, postalCode, country}));
        props.history.push('/payment');
    };
    return (
        <div>
            <CheckoutSteps step1 step2 ></CheckoutSteps>
            <form className="form" onSubmit={submitHandler}>
                <div>
                    <label htmlFor="name">Full Name</label>
                    <input type="text" id="name" 
                    placeholder="Enter full name" required
                    value={name} 
                    onChange={(e)=>setName(e.target.value)}></input>
                </div>
                <div>
                    <label htmlFor="address">Address</label>
                    <input type="text" id="address" 
                    placeholder="Enter address" required
                    value={address} 
                    onChange={(e)=>setAddress(e.target.value)}></input>
                </div>
                <div>
                    <label htmlFor="city">City</label>
                    <input type="text" id="city" 
                    placeholder="Enter city" required
                    value={city} 
                    onChange={(e)=>setCity(e.target.value)}></input>
                </div>
                <div>
                    <label htmlFor="postalCode">Postal Code</label>
                    <input type="text" id="postalCode" 
                    placeholder="Enter postal code" required
                    value={postalCode} 
                    onChange={(e)=>setPostalCode(e.target.value)}></input>
                </div>
                <div>
                    <label htmlFor="country">Country</label>
                    <input type="text" id="country" 
                    placeholder="Enter country" required
                    value={country} 
                    onChange={(e)=>setCountry(e.target.value)}></input>
                </div>
                <div>
                    <label />
                    <button className="primary" type="submit">Continue</button>
                </div>
            </form>
        </div>
    )
}
