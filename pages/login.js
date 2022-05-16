import React, { useState } from "react";
import AppLayout from "../components/AppLayout";
import { Row, Col } from "antd";
import UserScreen from "../components/UserScreen";
import LoginForm from "../components/LoginForm";
import { useSelector, useDispatch } from "react-redux";

const Login = () => {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  // 리덕스르 적용하면 아래와 같이 바뀐다
  const { isLoggedIn } = useSelector((state) => state.user);
  return (
    <LoginForm>
      {/* AppLayout에 들어있는 애들이 children이 된다 */}
      {isLoggedIn && <AppLayout />}
    </LoginForm> // 리덕스를 적용하면 이렇게 props 형태로 넘겨줄 필요도 없다
  );
};

export default Login;
