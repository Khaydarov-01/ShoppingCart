import React from 'react';

const Basket = ({cartItem, onAdd, onRemove}) => {
     const itemPrice = cartItem.reduce((a, c) => a + c.price * c.qty, 0);
     const taxPrice = itemPrice * 0.14;
     const shippingPrice = itemPrice > 2000 ? 0 : 50;
     const totalPrice = itemPrice + taxPrice + shippingPrice;

    return (
        <aside className='block col-1'>
            <h2>Cart Items</h2>
            <div>
                {cartItem.length === 0 && <div>Cart is Empty</div>}
            </div>
            {cartItem.map((item) => (
                <div key={item.id} className='row'>
                    <div className='col-2'>{item.name}</div>
                    <div className='col-2'>
                        <button onClick={() => onAdd(item)} className='add'>+</button>
                        <button onClick={() => onRemove(item)} className='remove'>-</button>
                    </div>
                    <div className='col-2 text-align'>
                        {item.qty} x ${item.price.toFixed(2)}
                    </div>
                </div>
            ))}
            {cartItem.length !== 0 && (
                <>
                   <hr></hr>
                   <div className='row'>
                        <div className='col-2'>Item Price</div>
                        <div className='col-1 text-align'>${itemPrice.toFixed(2)}</div>
                   </div>
                   <div className='row'>
                        <div className='col-2'>Tax Price</div>
                        <div className='col-1 text-align'>${taxPrice.toFixed(2)}</div>
                   </div>
                   <div className='row'>
                        <div className='col-2'>Shipping Price</div>
                        <div className='col-1 text-align'>${shippingPrice.toFixed(2)}</div>
                   </div>
                   <div className='row'>
                        <div className='col-2'><strong>Total Price</strong></div>
                        <div className='col-1 text-align'><strong>${totalPrice.toFixed(2)}</strong></div>
                   </div>
                   <hr />
                   <div className='row'>
                       <button onClick={() => alert('Element checkout')}>Checkout</button>
                   </div>
                </>
            )}
        </aside>
    );
};

export default Basket;