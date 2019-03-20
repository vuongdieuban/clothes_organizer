import React from "react";

const FormInput = props => {
  const { dataFieldName, label, value, onChange, type, placeholder } = props;

  return (
    <div className="form-group row">
      <label htmlFor={dataFieldName} className="col-sm-2 col-form-label">
        {label}
      </label>
      <div className="col-sm-5">
        <input
          onChange={onChange}
          name={dataFieldName}
          id={dataFieldName}
          placeholder={placeholder}
          type={type}
          className="form-control"
          value={value}
        />
      </div>
    </div>
  );
};

export default FormInput;
