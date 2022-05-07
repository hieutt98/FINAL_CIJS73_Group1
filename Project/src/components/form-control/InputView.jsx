import React from "react";
import PropTypes from "prop-types";
import { Controller } from "react-hook-form";
import styled from "styled-components";

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
  font-size:18px;
`;

const InputView = (props) => {
  const { form, name, placeholder ,type } = props;
  return (
    <Controller
      name={name}
      control={form.control}
      render={({
        field: { name, onChange, onBlur, value },
        fieldState: { invalid, error, isTouched },
      }) => (
        <div>
          <Input
            style={{border:error?"2px solid red":""}}
            name={name}
            value={value}
            type={type}
            placeholder={placeholder}
            onChange={onChange}
            onBlur={onBlur}
          />
          <p style={{color:'red'}}>{error?.message}</p>
        </div>
      )}
    />
  );
};

export default InputView;
