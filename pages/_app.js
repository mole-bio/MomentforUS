import React from "react";
import PropTypes from "prop-types";
import "antd/dist/antd.css";
import Head from "next/head";
import { PageHeader, Button } from "antd";
import "./App.css";

const App = ({ Component }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>MOMONT FOR US</title>
      </Head>
      <PageHeader
        title="MOMENT FOR US"
        // title 눌렀을때 홈페이지 이동 구현 필요 20220413
        extra={[
          <Button key="login" href="/login" type="text">
            로그인
          </Button>,
        ]}
      />
      <Component />
    </>
  );
};

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default App;
