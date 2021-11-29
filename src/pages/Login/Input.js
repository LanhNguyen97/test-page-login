import React, { useState } from "react";
import {
  SmallPass,
  StyleInput,
  StyleLabel,
  StyleSmall,
  WrapperInput,
} from "./styled";

const Input = (props) => {
  const [isShow, setIsShow] = useState(false);

  const onChange = (e) => {
    props?.onChange(props?.name, e?.target?.value);
  };

  let type = props?.type || "text";
  if (type === "password") {
    if (isShow) {
      type = "text";
    }
  } else {
    type = props?.type || "text";
  }

  return (
    <WrapperInput>
      <StyleLabel iserror={props?.isError}>{props?.label}</StyleLabel>
      <StyleInput
        name={props?.name}
        value={props?.value}
        onChange={onChange}
        iserror={props?.isError}
        type={type || "text"}
        required={props?.required}
      />
      {props?.type === "password" ? (
        <SmallPass onClick={() => setIsShow(!isShow)}>
          {isShow ? "Ẩn mật khẩu" : "Hiện mật khẩu"}
        </SmallPass>
      ) : null}
      <StyleSmall>{props?.error}</StyleSmall>
    </WrapperInput>
  );
};

export default Input;
