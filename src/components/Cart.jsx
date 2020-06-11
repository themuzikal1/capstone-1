import React from 'react';
import CartItem from './CartItem';


function Cart({ itemsInCart, totalCost }) {
    return (
        <>

            <div className="Cart">
                <h2 className="Cart-title">Your Shopping Cart</h2>
                {itemsInCart.length > 0 ? (
                    <div>
                        {itemsInCart.map(item => (
                            <CartItem
                                key={item.id}
                                title={item.title}
                                cost={item.price * item.quantity}
                                quantity={item.quantity} />
                        ))}
                        <div className="Cart-total-cost">
                            Total Cost: ${totalCost.toFixed(2)}
                        </div>
                    </div>


                ) : (
                        <div>Your Cart Is Empty</div>
                    )}
            </div >
        </>
    );
}
export default Cart;
