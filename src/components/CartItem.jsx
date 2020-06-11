import React from 'react';
//import './components/CartItem.css';

function CartItem({ title, cost, quantity }) {
    return (
        <div className="CartItem">
            <div>{title}</div>
            <div className="CartItem-details">
                <div className='CartItem-quantity'>Quantity: {quantity}</div>
                <div>${cost.toFixed(2)}</div>
            </div>
        </div>
    );
}

export default CartItem;