import React, { useCallback, useState } from "react";
import { Button, Form, Input } from "antd";
import Link from "next/link";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { loginAction } from "../reducers/user";

const ButtonWrapper = styled.div`
  margin-top: 10px;
`;

// 만약 컴포넌트를 styled component 하고 싶으면 const 스타일된이름 = styled.(적용할 컴포넌트 이름)`` 이렇게 하면 된다
const FormWrapper = styled(Form)`
  padding: 10px;
`;

const LoginForm = () => {
  const dispatch = useDispatch();

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const onChangeId = useCallback((e) => {
    setId(e.target.value);
  }, []);

  //   component에 props 로 넘겨주는 함수는 꼭 useCallback 을 써라
  const onChangePassword = useCallback((e) => {
    setPassword(e.target.value);
  }, []);

  const onsubmitForm = useCallback(
    (e) => {
      console.log(id, password);
      dispatch(loginAction(id, password));
    },
    [id, password]
  ); // state는 dependency애 넣어준다

  // 보통 리액트에서는 아래와 같이 하는데 antd에서는 하면 아니되오
  // const onsubmitForm = (e) => {
  //   e.preventDefault();
  // }

  return (
    <FormWrapper onFinish={onsubmitForm}>
      <div>
        <label htmlFor="user-id">아이디</label>
        <br />
        <Input name="user-id" value={id} onChange={onChangeId} required />
      </div>
      <div>
        <label htmlFor="user-password">비밀번호</label>
        <br />
        <Input
          name="user-password"
          value={password}
          onChange={onChangePassword}
          type="password"
          required
        />
      </div>
      {/* style={{ marginTop: "10px" }} 인라인 스타일로 객체로 표현을 하면 리렌더링 할때 이 부분도 인식해서 여기가 렌더링되는 문제가 생김 
      그래서 사용하는 것이 styled component를 쓰는것이 좋다*/}
      {/* <div style={{ marginTop: "10px" }}> */}
      <ButtonWrapper>
        <Button type="primary" htmlType="submit" loading={false}>
          로그인
        </Button>
        <Link href="/signup">
          <a>
            <Button>회원가입</Button>
          </a>
        </Link>
      </ButtonWrapper>
    </FormWrapper>
  );
};

export default LoginForm;
