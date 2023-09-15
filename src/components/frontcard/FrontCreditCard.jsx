import React from "react";
import styles from "./frontCard.module.css";
import frontCardImg from "../../images/frontCard.png";
import blueE from "../../images/blue.png";
import darkblue from "../../images/darkblue.png";
import orange from "../../images/orange.png";
import pink from "../../images/pink.png";
import purple from "../../images/purple.png";

const frontCard = ({ cardNum, name, month, year }) => {
  return (
    <div className={styles.container}>
      <div className={styles.innerCon}>
        <img src={blueE} alt="" className={styles.blueE} />
        <img src={darkblue} alt="" className={styles.darkblue} />
        <img src={orange} alt="" className={styles.orange} />
        <img src={pink} alt="" className={styles.pink} />
        <img src={purple} alt="" className={styles.purple} />
        <div className={styles.cardDetails}>
          <div className={styles.cardNumber}>
            {cardNum ? (
              <>
                <span>{cardNum.slice(0, 4)}</span>
                <span>{cardNum.slice(4, 8)}</span>
                <span>{cardNum.slice(8, 12)}</span>
                <span>{cardNum.slice(12, 16)}</span>
              </>
            ) : (
              <>
                <span>0000</span>
                <span>0000</span>
                <span>0000</span>
                <span>0000</span>
              </>
            )}
          </div>
          <div className={styles.cardNameDate}>
            <p className={styles.cardName}>
              {name ? <>{name}</> : <>Jane Appleseeed</>}
            </p>
            <p>
              {month ? <>{month}</> : <>00</>}/{year ? <>{year}</> : <>00</>}
            </p>
          </div>
        </div>
        <div className={styles.bigCircle}></div>
        <div className={styles.smallCircle}></div>
      </div>
    </div>
  );
};

export default frontCard;
