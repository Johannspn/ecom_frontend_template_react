import React from 'react';
import { Link, useParams } from 'react-router-dom';

function ProductScreen() {
  //attention if we don't get id this addrss doesnot work  product/123  while product works
  const params = useParams();
  const { id } = params;
  //   <div className="product">
  //   <Link to="/product/123">
  //     <img className="product-image" src="/images/d1.jpg" alt="product" />
  //   </Link>
  //   <div className="product-name">
  //     <Link to="/product/123">Slim Shirt</Link>
  //     {/* <Link to={`/product/` + 'id=123'}>Slim Shirt</Link> */}
  //   </div>
  //   <div className="product-brand">Nike</div>
  //   <div className="product-price">$60</div>
  //   <div className="product-rating">4.5 Stars (10 Reviews)</div>
  // </div>
  return (
    <div>
      <div className="back-to-result">
        <Link to="/">Back to result</Link>
      </div>
      <div className="details">
        {/* 3 columns 1 for image 1 for detail and 1 for action */}
        <div className="details-image">
          <img src="/images/d1.jpg" alt="product"></img>
        </div>
        <div className="details-info">
          <ul>
            <li>
              <h4>Slim Shirt</h4>
            </li>
            <li>4.5 Stars 10 Reviews</li>
            <li>
              Price: <b>$60</b>
            </li>
            <li>
              Description:
              <div>Product.Description</div>
            </li>
          </ul>
        </div>
        {/* 3rd column or action */}

        <div className="details-action">
          <ul>
            <li>Price: $60</li>
            <li>Status: {2 > 0 ? 'In Stock' : 'Unavailable.'}</li>
            <li>
              Qty:{' '}
              <select
              // value={2}

              // onChange={(e) => {
              //   setQty(e.target.value);
              // }}
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                {/* {[...Array(product.countInStock).keys()].map((x) => (
                  <option key={x + 1} value={x + 1}>
                    {x + 1}
                  </option>
                ))} */}
              </select>
            </li>
            <li>
              {/* {product.countInStock > 0 && (
                <button onClick={handleAddToCart} className="button primary">
                  Add to Cart
                </button>
              )} */}
              <button className="button primary">Add to Cart</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProductScreen;
