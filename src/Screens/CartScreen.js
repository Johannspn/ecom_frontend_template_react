import React from 'react';
import { Link } from 'react-router-dom';

function CartScreen() {
  //also we have access to number of cart which is a backend subject:
  const qty = 3;
  const cartItems = [1, 2];
  return (
    <div className="cart">
      <div className="cart-list">
        <ul className="cart-list-container">
          <li>
            <h3>Shopping Cart</h3>
            <div>Price</div>
          </li>
          {cartItems.length === 0 ? (
            <div>Cart is empty</div>
          ) : (
            cartItems.map((item) => (
              <li>
                <div className="cart-image">
                  <img src="/images/d1.jpg" alt="product" />
                </div>
                <div className="cart-name">
                  <div>
                    <Link to={'/product/' + 'item.product'}>product name</Link>
                  </div>
                  <div>
                    Qty:
                    <select
                    //   value={item.qty}
                    //   onChange={(e) =>
                    //     dispatch(addToCart(item.product, e.target.value))
                    //   }
                    >
                      {/* {[...Array(item.countInStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))} */}
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                    </select>
                    <button
                      type="button"
                      className="button"
                      //   onClick={() => removeFromCartHandler(item.product)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
                <div className="cart-price">$ 65</div>
              </li>
            ))
          )}
        </ul>
      </div>
      <div className="cart-action">
        <h3>
          Subtotal ( {cartItems.reduce((a, c) => a + c.qty, 0)} items) : ${' '}
          {cartItems.reduce((a, c) => a + c.price * c.qty, 0)}
        </h3>
        <button
          //   onClick={checkoutHandler}
          className="button primary full-width"
          disabled={cartItems.length === 0}
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}

export default CartScreen;
