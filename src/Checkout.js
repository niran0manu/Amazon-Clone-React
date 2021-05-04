import React from 'react';
import './Checkout.css';
import Subtotal from './Subtotal.js';
import {useStateValue} from "./StateProvider";

function Checkout() {
    const [{basket}, dispatch] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout_left">
                <img className="cheakout__Add" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
                  alt="Add" />
                <div>
                    <h2 className="checkout__title">Your Shopping Basket has: <span>{basket?.length}</span> items. </h2>
                </div>

            </div>
            {/* subtotal */}
            <div className="checkout__right">
                <Subtotal />

            </div>

        </div>
    )
}

export default Checkout;





