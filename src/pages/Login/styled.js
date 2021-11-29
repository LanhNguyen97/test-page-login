import styled from "styled-components";

export const StyleInput = styled.input`
  border: 1px solid ${({ iserror }) => (iserror ? "#FF2625" : "#d9dce1")};
  border-radius: 14px;
  color: #677187;
  font-size: 15px;
  height: 56px;
  padding: 0 10px;
`;

export const StyleLabel = styled.label`
  color: ${({ iserror }) => (iserror ? "#FF2625" : "#4e5a73")};
  font-weight: bold;
  font-size: 14px;
  margin-bottom: 4px;
`;

export const StyleSmall = styled.small`
  color: #ff2625;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
`;

export const WrapperLogin = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  @media screen and (max-width: 1040px) {
    .wrapper-background {
      display: none;
    }
  }
`;

export const WrapperFormLogin = styled.div`
  max-width: 540px;
  height: auto;
  margin-left: 30px;

  @media screen and (max-width: 1040px) {
    margin-left: 0;

    .form-login {
      width: 45vw !important;
    }
  }

  @media screen and (max-width: 600px) {
    width: 100%;
    padding: 0 20px;

    .form-login {
      width: 100% !important;
      padding: 0px !important;
      box-shadow: none !important;
    }
  }

  .wrapper-logo {
    width: 100%;
    max-height: 45px;
    margin-bottom: 50px;
    text-align: center;

    img {
      width: 100%;
      max-width: 260px;
      height: auto;
    }
  }

  .form-login {
    background: #ffffff;
    box-shadow: 0px 12px 23px rgba(62, 73, 84, 0.04);
    border-radius: 5px;
    padding: 50px;
    width: 27vw;

    &__title {
      margin-bottom: 50px;
      font-weight: 600;
      font-size: 18px;
      color: #021337;
      text-align: center;
    }
  }
`;

export const WrapperInput = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
`;

export const SmallPass = styled.small`
  color: #2844ce;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  margin-top: 4px;
  cursor: pointer;
`;

export const ButtonForgotPass = styled.button`
  color: #2844ce;
  font-style: normal;
  font-weight: normal;
  font-weight: 600;
  font-size: 14px;
  margin-top: 4px;
  cursor: pointer;
  background-color: unset;
  border: unset;
  margin-top: 50px;
`;

export const StyleButton = styled.button`
  background: #f9aa1a;
  border-radius: 10px;
  width: 100%;
  color: #021337;
  font-weight: 600;
  font-size: 16px;
  text-align: center;
  height: 50px;
  border: none;
  cursor: pointer;
`;
