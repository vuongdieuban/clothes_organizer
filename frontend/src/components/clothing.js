import React, { Component } from "react";
import ListGroup from "./common/listGroup";
import Shirt from "./shirts";

class Clothing extends Component {
  state = {
    clothingCategory: [],
    selectedClothingCategory: {}
  };

  handleSelectItem = selectedClothingCategory => {
    this.setState({ selectedClothingCategory });
  };

  componentDidMount() {
    const clothingCategory = [
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

          <div className="col-md-9">
            <Shirt />
          </div>
        </div>
      </div>
    );
  }
}

export default Clothing;
