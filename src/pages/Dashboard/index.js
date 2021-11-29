import Cookies from "js-cookie";
import React from "react";
import { StyleLogout } from "./styled";
const Dashboard = () => {
  const onLogout = () => {
    Cookies.remove("token");
    localStorage.removeItem("token");
    window.location.href = "/login";
  };
  return (
    <div>
      <span>Bạn đã đăng nhập thành công</span>
      <StyleLogout onClick={onLogout}>Đăng xuất</StyleLogout>
    </div>
  );
};

export default Dashboard;
