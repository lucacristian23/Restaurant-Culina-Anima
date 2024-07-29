import React from "react";
import { Component } from "react";

class MenuItem extends Component {
  constructor(props) {
    super(props);
    const { itemInfo } = this.props;
    this.state = {
      isFavorite: itemInfo.isFavorite,
    };
  }

  handleClickFavorite = () => {
    const { isFavorite } = this.state;
    this.setState({
      isFavorite: !isFavorite,
    });
  };

  render() {
    const { itemInfo } = this.props;

    return (
      <div>
        <div
          className="mainVerticalContainer"
          style={{ borderBottom: "1px solid black" }}
        >
          <div className="imgContainer">
            <img src={itemInfo.foodImage} alt="" />
          </div>

          <div
            className="descriptionAndPriceContainer"
            style={{ width: "100%" }}
          >
            <h3 style={{ textAlign: "center" }}>{itemInfo.itemName}</h3>
            <h5 style={{ textAlign: "center" }}>{itemInfo.description}</h5>
          </div>

          <h3 style={{ textAlign: "center" }}>{itemInfo.price} RON</h3>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <img
            src="/model.png"
            alt="Descripge"
            style={{ height: "30%", width: "30%" }}
          />

          <img
            src="/model.png"
            alt="Descripge"
            style={{ height: "30%", width: "30%" }}
          />
          <img
            src="/model.png"
            alt="Descripge"
            style={{ height: "30%", width: "30%" }}
          />

          <img
            src="/model.png"
            alt="Descripge"
            style={{ height: "30%", width: "30%" }}
          />
        </div>
      </div>
    );
  }
}

export default MenuItem;

/*
 <div className="itemContainer">
        <div className="leftContainer">
          <div className="imgContainer">
            <img src={itemInfo.foodImage} alt="" />
          </div>
          <div className="itemDescription">
            <h3>{itemInfo.itemName}</h3>
            <p>{itemInfo.description}</p>
          </div>
        </div>
        <div className="rightContainer">
          <div>{itemInfo.price} RON</div>
        </div>
      </div>
      */
