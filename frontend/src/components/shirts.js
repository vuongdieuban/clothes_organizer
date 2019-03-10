import React, { Component } from "react";
import { getBaseURL } from "../services/baseURL";
import { getAllShirts } from "../services/shirtsService";

const SHIRT_URL = `${getBaseURL()}/shirts`;

class Shirt extends Component {
  state = {
    shirts: []
  };

  async componentDidMount() {
    const shirts = await getAllShirts(SHIRT_URL);
    this.setState({ shirts });
  }

  render() {
    const { shirts } = this.state;
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            {shirts &&
              shirts.map(shirt => {
                return (
                  <div className="col-md-4" key={shirt._id}>
                    <img className="clothing-image" src={shirt.image} alt="" />
                  </div>
                );
              })}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Shirt;
