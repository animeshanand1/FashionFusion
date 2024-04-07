import React, { useEffect } from "react";
import styles from "./mycart.module.css";
import CartCard from "./CartCard";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Mycart() {
  const items = useSelector((state) => state.cart.items);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
 let TotalSum=totalPrice+(totalPrice*0.1);
  const divStyle = {
    backgroundColor: '#fff',
    borderRadius: '8px',
    padding: '20px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    maxWidth: '400px',
    margin: '0 auto',
    textAlign: 'center',
  };

  const smileyStyle = {
    fontSize: '50px',
    marginBottom: '20px',
  };

  const buttonStyle = {
    display: 'inline-block',
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    textDecoration: 'none',
    borderRadius: '5px',
    marginTop: '20px',
    transition: 'background-color 0.3s ease',
  };

  const handleMouseOver = (e) => {
    e.target.style.backgroundColor = '#0056b3';
  };

  const handleMouseOut = (e) => {
    e.target.style.backgroundColor = '#007bff';
  };
  return (
    <>
      <div className={styles.cartMain}>
        <div className={styles["summary-wrapper"]}>
          <div className={styles["cart-component"]}>
            {items.length > 0 ? (
              items.map((item) => {
                  return (
                    <CartCard category={item.category} price={item.price} quantity={item.quantity} image={item.image}  />
                  );
                })
            ) : (
              <div style={divStyle}>
              <div style={smileyStyle}>😕</div>
              <h1 style={{ color: '#333' }}>Your Cart is Empty!</h1>
              <p>
                Oh dear, it looks like your cart is feeling a bit light at the moment. But don't worry, we'll fix that and turn
                those frowns into smiles!
              </p>
              <p>How about we sprinkle some happiness into your shopping experience?</p>
              <Link
                to="/"
                style={buttonStyle}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
              >
                Add Some Joy!
              </Link>
            </div>
            )}

          </div>
          <div className={styles["payment-card-container"]}>
            <form className={styles["card-background"]}>
              <div className={styles["card-detail-tag"]}>Card Details</div>
              <div>
                <div className={styles["card-detailed-info"]}>
                  <label className={styles["card-name-label"]}>Name on card</label>
                  <input type="text" className={styles["card-name-input"]} placeholder="Your Name" />
                  <label className={styles["card-num-label"]}>Card Number</label>
                  <input className={styles["card-num-input"]} placeholder="1111 2222 3333 4444" />
                </div>
                <div className={styles["card-validity"]}>
                  <div className={styles["card-exp"]}>
                    <label className={styles["exp-label"]}>Expiration date</label>
                    <input className={styles["exp-input"]} placeholder="mm/yy" />
                  </div>
                  <div className={styles["card-cvv"]}>
                    <label className={styles["cvv-label"]}>CVV</label>
                    <input className={styles["cvv-input"]} placeholder="cvv" />
                  </div>
                </div>
                <div className={styles["separator-line"]}></div>
                <div className={styles["checkout-info"]}>
                  <div className={styles["price-label-col"]}>
                    <div>Subtotal</div>
                    <div>Shipping</div>
                    <div>Total (Tax incl.)</div>
                  </div>
                  <div className={styles["price-amount-col"]}>
                    <div>{'\u20B9'}{totalPrice}</div>
                    <div>{'\u20B9'}4</div>
                    <div>{'\u20B9'}{TotalSum}</div>
                  </div>
                </div>
                <div className={styles["checkout-container"]}>
                  <div className={styles["checkout-total"]}>{'\u20B9'}{TotalSum}</div>
                  <div className={styles["checkout-total"]}>Checkout</div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Mycart;
