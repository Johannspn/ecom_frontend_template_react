import React from 'react';
import { Link } from 'react-router-dom';

const loading = false;

// another way for css style
// const mystyle = {
//   color: "white",
//   backgroundColor: "DodgerBlue",
//   padding: "10px",
//   fontFamily: "Arial"
// };
// <h1 style={mystyle}>Hello Style!</h1>

function HomeScreen() {
  return loading ? (
    <div>
      <div className="loader"></div>
    </div>
  ) : (
    <ul className="products">
      <li>
        <div className="product">
          <Link to="/product/123">
            <img
              // add slash befor images   so   /images
              className="product-image"
              src="/images/d1.jpg"
              alt="product"
            />
          </Link>

          <div className="product-name">
            <Link to="/product/123">Slim Shirt</Link>
            {/* <Link to={`/product/` + 'id=123'}>Slim Shirt</Link> */}
          </div>
          <div className="product-brand">Nike</div>
          <div className="product-price">$60</div>
          <div className="product-rating">4.5 Stars (10 Reviews)</div>
        </div>
      </li>
      <li>
        <div className="product">
          <Link to="/product/123">
            <img className="product-image" src="/images/d1.jpg" alt="product" />
          </Link>
          <div className="product-name">
            <Link to="/product/123">Slim Shirt</Link>
            {/* <Link to={`/product/` + 'id=123'}>Slim Shirt</Link> */}
          </div>
          <div className="product-brand">Nike</div>
          <div className="product-price">$60</div>
          <div className="product-rating">4.5 Stars (10 Reviews)</div>
        </div>
      </li>
      <li>
        <div className="product">
          <Link to="/product/123">
            <img className="product-image" src="/images/d1.jpg" alt="product" />
          </Link>
          <div className="product-name">
            <Link to="/product/123">Slim Shirt</Link>
            {/* <Link to={`/product/` + 'id=123'}>Slim Shirt</Link> */}
          </div>
          <div className="product-brand">Nike</div>
          <div className="product-price">$60</div>
          <div className="product-rating">4.5 Stars (10 Reviews)</div>
        </div>
      </li>
      <li>
        <div className="product">
          <Link to="/product/123">
            <img className="product-image" src="/images/d1.jpg" alt="product" />
          </Link>
          <div className="product-name">
            <Link to="/product/123">Slim Shirt</Link>
            {/* <Link to={`/product/` + 'id=123'}>Slim Shirt</Link> */}
          </div>
          <div className="product-brand">Nike</div>
          <div className="product-price">$60</div>
          <div className="product-rating">4.5 Stars (10 Reviews)</div>
        </div>
      </li>
      <li>
        <div className="product">
          <img className="product-image" src="/images/d1.jpg" alt="product" />
          <div className="product-name">
            <Link to="/product/123">Slim Shirt</Link>
            {/* <Link to={`/product/` + 'id=123'}>Slim Shirt</Link> */}
          </div>
          <div className="product-brand">Nike</div>
          <div className="product-price">$60</div>
          <div className="product-rating">4.5 Stars (10 Reviews)</div>
        </div>
      </li>
      <li>
        <div className="product">
          <img className="product-image" src="/images/d1.jpg" alt="product" />
          <div className="product-name">
            <Link to="/product/123">Slim Shirt</Link>
            {/* <Link to={`/product/` + 'id=123'}>Slim Shirt</Link> */}
          </div>
          <div className="product-brand">Nike</div>
          <div className="product-price">$60</div>
          <div className="product-rating">4.5 Stars (10 Reviews)</div>
        </div>
      </li>
    </ul>
  );
}

export default HomeScreen;
