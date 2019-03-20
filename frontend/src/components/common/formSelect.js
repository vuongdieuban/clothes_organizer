import React from "react";

const FormSelect = props => {
  const { dataFieldName, label, options, onChange, value } = props;

  const renderOptions = () => {
    return (
      options &&
      options.map(option => (
        <option key={option._id} value={option._id}>
          {option.name}
        </option>
      ))
    );
  };

  return (
    <div className="form-group row">
      <label htmlFor={dataFieldName} className="col-sm-2 col-form-label">
        {label}
      </label>
      <div className="col-sm-5">
        <select
          className="form-control"
          name={dataFieldName}
          id={dataFieldName}
          onChange={onChange}
          value={value}
        >
          {renderOptions()}
        </select>
      </div>
    </div>
  );
};

export default FormSelect;
