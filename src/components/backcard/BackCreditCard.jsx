import React from "react";
import styles from "./backCard.module.css";
import backCardImg from "../../images/backCard.png";

const BackCreditCard = ({ cvc }) => {
  return (
    <div className={styles.container}>
      <div className={styles.innerCon}>
        <img src={backCardImg} alt="" />
        <p className={styles.cvc}>{cvc ? <>{cvc}</> : <>000</>}</p>
      </div>
    </div>
  );
};

export default BackCreditCard;
