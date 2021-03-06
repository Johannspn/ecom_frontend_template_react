import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CheckoutSteps from '../components/CheckoutSteps';

function PlaceOrderScreen() {
  // const navigate = useNavigate();
  // if (!shipping.address) {
  //   navigate('/shipping');
  // } else if (!payment.paymentMethod) {
  //   navigate('/payment');
  // }
  const cartItems = [1, 2];
  // const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
  const itemsPrice = 150;
  const shippingPrice = itemsPrice > 100 ? 0 : 10;
  const taxPrice = 0.15 * itemsPrice;
  const totalPrice = itemsPrice + shippingPrice + taxPrice;
  const placeOrderHandler = () => {
    // create an order
  };
  return (
    <div>
      <CheckoutSteps step1 step2 step3 step4></CheckoutSteps>

      <div className="placeorder">
        <div className="placeorder-info">
          <div>
            <h3>Shipping</h3>
            <div>
              {'cart.shipping.address'}, {'cart.shipping.city'},
              {'cart.shipping.postalCode'}, {'cart.shipping.country'},
            </div>
          </div>
          <div>
            <h3>Payment</h3>
            <div>Payment Method: {'cart.payment.paymentMethod'}</div>
          </div>

          <div>
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
                        <Link to={'/product/' + 'item.product'}>
                          product name
                        </Link>
                      </div>
                      <div>Qty: {'item.qty'}</div>
                    </div>
                    <div className="cart-price">$ 65</div>
                  </li>
                ))
              )}
            </ul>
          </div>
        </div>
        <div className="placeorder-action">
          <ul>
            <li>
              <button
                className="button primary full-width"
                onClick={placeOrderHandler}
              >
                Place Order
              </button>
            </li>
            <li>
              <h3>Order Summary</h3>
            </li>
            <li>
              <div>Items</div>
              <div>${itemsPrice}</div>
            </li>
            <li>
              <div>Shipping</div>
              <div>${shippingPrice}</div>
            </li>
            <li>
              <div>Tax</div>
              <div>${taxPrice}</div>
            </li>
            <li>
              <div>Order Total</div>
              <div>${totalPrice}</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default PlaceOrderScreen;
