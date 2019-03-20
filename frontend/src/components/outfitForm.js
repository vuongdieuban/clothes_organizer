import React, { Component } from "react";
import {
  getAllOutfits,
  getOneOutfit,
  saveOutfit
} from "../services/outfitService";
import { getAllOuterWears } from "../services/outerWearService";
import { getAllShirts } from "../services/shirtsService";
import { getAllPants } from "../services/pantsService";
import { getAllShoes } from "../services/shoesService";
import FormSelect from "./common/formSelect";
import FormInput from "./common/formInput";

class OutfitForm extends Component {
  state = {
    outfits: [],
    outfit: {
      name: "",
      outerWear: "",
      shirt: "",
      pants: "",
      shoes: ""
    },

    outerWears: [],
    shirts: [],
    pants: [],
    shoes: []
  };

  handleChange = e => {
    // cloning the state outfit
    const outfit = { ...this.state.outfit };
    outfit[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ outfit });
  };

  handleSubmit = async e => {
    e.preventDefault();
    await saveOutfit(this.state.outfit);
    this.props.history.replace("/");
  };

  renderFormSelect = (dataFieldName, label, options) => {
    // dataFieldName is the field name of oufit object model
    const { outfit } = this.state;
    return (
      <FormSelect
        dataFieldName={dataFieldName}
        label={label}
        options={options}
        value={outfit[dataFieldName]}
        onChange={this.handleChange}
      />
    );
  };

  renderFormInput = (dataFieldName, label, placeholder, type) => {
    const { outfit } = this.state;
    return (
      <FormInput
        dataFieldName={dataFieldName}
        label={label}
        placeholder={placeholder}
        type={type}
        value={outfit[dataFieldName]}
        onChange={this.handleChange}
      />
    );
  };

  async componentDidMount() {
    const outfits = await getAllOutfits();
    const shirts = await getAllShirts();
    const outerWears = await getAllOuterWears();
    const pants = await getAllPants();
    const shoes = await getAllShoes();
    this.setState({ outfits, outerWears, shirts, pants, shoes });

    // set default
    const outfitId = this.props.match.params.id;
    let outfit = { ...this.state.outfit };
    if (outfitId === "new") {
      outfit.outerWear = outerWears[0]._id;
      outfit.shirt = shirts[0]._id;
      outfit.pants = pants[0]._id;
      outfit.shoes = shoes[0]._id;
      this.setState({ outfit });
      console.log("default outfit \n", outfit);
    } else {
      // specific outfit
      try {
        const existedOutfit = await getOneOutfit(outfitId);
        console.log("Existed Outfit \n", existedOutfit);
        outfit._id = existedOutfit._id;
        outfit.name = existedOutfit.name;
        outfit.outerWear = existedOutfit.outerWear._id;
        outfit.shirt = existedOutfit.shirt._id;
        outfit.pants = existedOutfit.pants._id;
        outfit.shoes = existedOutfit.shoes._id;
        this.setState({ outfit });
      } catch (ex) {
        this.props.history.replace("/");
      }
    }
  }

  render() {
    const { outerWears, shirts, pants, shoes } = this.state;
    return (
      <div className="container">
        <h1>Outfit</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderFormInput("name", "Name", "Casual Outfit", "text")}
          {this.renderFormSelect("outerWear", "OuterWear", outerWears)}
          {this.renderFormSelect("shirt", "Shirt", shirts)}
          {this.renderFormSelect("pants", "Pants", pants)}
          {this.renderFormSelect("shoes", "Shoes", shoes)}
          <button className="btn btn-primary ">Save</button>
        </form>
      </div>
    );
  }
}

export default OutfitForm;
