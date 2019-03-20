import React, { Component } from "react";
import _ from "lodash";
import ListGroup from "./common/listGroup";
import Shirt from "./shirts";
import Pants from "./pants";
import Shoes from "./shoes";

class Clothing extends Component {
  state = {
    clothingCategory: [],
    selectedClothingCategory: {}
  };

  handleSelectItem = selectedClothingCategory => {
    this.setState({ selectedClothingCategory });
  };

  displayClothing = () => {
    const { selectedClothingCategory } = this.state;
    // if (_.isEmpty(selectedClothingCategory)) return <Shirt />;

    switch (selectedClothingCategory.name) {
      case "Shirt":
        return <Shirt />;
      case "Pants":
        return <Pants />;
      case "Shoes":
        return <Shoes />;
      default:
        return <Shirt />;
    }
  };

  componentDidMount() {
    const clothingCategory = [
      { name: "All" },
      { name: "OuterWear" },
      { name: "Shirt" },
      { name: "Pants" },
      { name: "Shoes" }
    ];
    this.setState({ clothingCategory });
  }

  render() {
    const { clothingCategory, selectedClothingCategory } = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <ListGroup
              data={clothingCategory}
              selectedItem={selectedClothingCategory}
              onSelectItem={this.handleSelectItem}
            />
          </div>

          <div className="col-md-9">{this.displayClothing()}</div>
        </div>
      </div>
    );
  }
}

export default Clothing;
