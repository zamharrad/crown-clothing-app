import React from "react";
import "./Form-Input.scss";

const FormInput = ({ lable, handleChange, ...otherProps }) => (
  <div className="group">
    <input className="form-input" onChange={handleChange} {...otherProps} />
    {lable ? (
      <lable
        className={`${
          otherProps.value.lenght ? "shrink" : ""
        } form-input-lable`}
      >
        {" "}
        {lable}{" "}
      </lable>
    ) : null}
  </div>
);

export default FormInput;
