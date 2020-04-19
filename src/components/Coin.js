import React from 'react';
import "./CoinStyles.css";
import CoinTura from "./1-lira-tura.png";
import CoinYazi from "./1-lira-yazi.png";

const Coin = (props) => {
    return (
        <div className="Coin-container">
            <div className={`Coin ${props.donuyor && "Coin-rotate"}`}>
                <img alt="" src={CoinTura}
                     className={
                         props.currentStatus === "yazi" ? "Coin-back": "Coin-front"
                     }
                />
                <img alt="" src={CoinYazi} className={
                        props.currentStatus === "yazi" ? "Coin-front": "Coin-back"
                } />
            </div>
        </div>
    );
};

export default Coin;
