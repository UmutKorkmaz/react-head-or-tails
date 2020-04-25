import React, { Component } from "react";
import "./CoinFlipperStyles.css";
import Coin from "./Coin";

const options = ["yazi", "tura"];

const getRandomElFromArr = (arr) => {
  const randomIndex = Math.floor(Math.random() * arr.length);
  const randomItem = arr[randomIndex];
  return randomItem;
};

class CoinFlipper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStatus: options[0],
      gelenler: [],
      donuyor: false,
    };
  }

  atisYap = () => {
    this.setState({
      donuyor: true,
    });
    const rastgeleEleman = getRandomElFromArr(options);
    setTimeout(() => {
      this.setState({
        currentStatus: rastgeleEleman,
        gelenler: [...this.state.gelenler, rastgeleEleman],
        donuyor: false,
      });
    }, 1000);
  };

  say = (coin) => {
    let counter = 0;
    for (const input of this.state.gelenler) {
      if (input === coin) counter += 1;
    }
    return counter;
  };

  render() {
    const { currentStatus, donuyor, gelenler } = this.state;
    const atisYapildi = gelenler.length>0;
    return (
      <div>
        <h1>Yazı mı? Tura mı?</h1>
        <Coin currentStatus={currentStatus} donuyor={donuyor} />
        <button onClick={this.atisYap}>Atış yap</button>
        {
          <>
          <div>Toplam Atis: {gelenler.length}</div>
          {
            options.map((option) =>{
              const sayi= gelenler.filter((item) => item ===option);
              return <div>{option} sayisi: {sayi.length}</div>
            })
          }
          </>
        }
        {
         atisYapildi && !donuyor && <h3>{currentStatus} geldi</h3> 
        }
      </div>
    );
  }
}

export default CoinFlipper;
