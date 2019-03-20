import React, { Component } from "react";

class CommonClothingModel extends Component {
  state = {
    data: []
  };

  async componentDidMount() {
    const data = await this.getAllData();
    this.setState({ data });
  }

  render() {
    const { data } = this.state;
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            {data &&
              data.map(d => {
                return (
                  <div className="col-md-4" key={d._id}>
                    <img className="clothing-image" src={d.image} alt="" />
                  </div>
                );
              })}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default CommonClothingModel;
