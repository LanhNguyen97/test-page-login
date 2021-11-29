import Cookies from "js-cookie";
import React from "react";
import { useImmer } from "use-immer";
import Input from "./Input";
import {
  ButtonForgotPass,
  StyleButton,
  StyleSmall,
  WrapperFormLogin,
  WrapperLogin,
} from "./styled";
import { validateEmail } from "../../utils";
import axios from "axios";
import cogoToast from "cogo-toast";

const marginBottom = { marginBottom: "16px" };

const Login = () => {
  const token = Cookies.get("token") || localStorage.getItem("token");

  if (token) {
    window.location.href = "/";
  }

  const [state, setState] = useImmer({
    email: "",
    password: "",
    errors: {
      email: "",
      password: "",
      wrongAccount: "",
    },
  });

  const setStateCommon = (object = {}) => {
    if (typeof object === "object" && Object.keys(object).length > 0) {
      Object.keys(object).forEach((key) => {
        setState((draft) => {
          draft[key] = object[key];
        });
      });
    }
  };

  const onChangeCommon = (name, value) => {
    setStateCommon({
      [name]: value,
      errors: { ...state.errors, [name]: "", wrongAccount: "" },
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const isValidEmail = validateEmail(state.email);

    if (!isValidEmail) {
      setStateCommon({
        errors: { ...state.errors, email: "Email sai định dạng." },
      });
    } else {
      axios({
        method: "post",
        url: "https://mcapi.yougo.vn/api/auth/login",
        data: {
          email: state.email,
          password: state.password,
        },
      })
        .then((res) => {
          if (res?.data?.data && res?.data?.data?.token) {
            Cookies.set("token", res?.data?.data?.token);
            localStorage.setItem("token", res?.data?.data?.token);
            cogoToast.success("Đăng nhập thành công");

            setTimeout(() => {
              window.location.href = "/";
            }, 500);
          } else {
            cogoToast.error("Đã xảy ra lỗi, vui lòng thử lại");
          }
        })
        .catch((err) => {
          setStateCommon({
            errors: {
              ...state.errors,
              wrongAccount: "Sai tài khoản hoặc mật khẩu, vui lòng thử lại.",
            },
          });
          cogoToast.error("Sai tài khoản hoặc mật khẩu, vui lòng thử lại.");
          console.log("err ===", err);
        });
    }
  };

  return (
    <WrapperLogin>
      <div className="wrapper-background">
        <img
          style={{ maxWidth: "650px", maxHeight: "90vh" }}
          src="/bg.png"
          alt=""
        />
      </div>
      <WrapperFormLogin>
        <div className="wrapper-logo">
          <img className="" src="/Logo.svg" alt="logo" />
        </div>
        <div className="form-login">
          <div className="form-login__title">Đăng nhập tài khoản</div>
          <form onSubmit={onSubmit}>
            <Input
              label="Email"
              value={state.email}
              onChange={onChangeCommon}
              name="email"
              isError={!!state.errors.email}
              required
              error={state.errors.email}
            />
            <Input
              label="Mật khẩu"
              value={state.password}
              type="password"
              onChange={onChangeCommon}
              name="password"
              required
            />
            {state?.errors?.wrongAccount ? (
              <div style={marginBottom}>
                <StyleSmall>{state?.errors?.wrongAccount}</StyleSmall>
              </div>
            ) : null}
            <StyleButton>Đăng nhập</StyleButton>
          </form>
          <ButtonForgotPass>Quên mật khẩu đăng nhập? </ButtonForgotPass>
        </div>
      </WrapperFormLogin>
    </WrapperLogin>
  );
};

export default Login;
