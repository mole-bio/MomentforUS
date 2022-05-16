// page에 들어갈 컴포넌트

import React, { useState } from "react";
import Link from "next/link";
// import Image from "next/image";
import { Menu, Input, Button, Carousel, Row, Col, Card, Image } from "antd";
import PropTypes from "prop-types";
import UserScreen from "./UserScreen";
import LoginForm from "./LoginForm";

const AppLayout = ({ children }) => {
  return (
    <div>
      <Menu mode="horizontal">
        <Menu.Item key="식전영상">
          <Link href="/식전영상">
            <a>식전영상</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="감사영상">
          <Link href="/감사영상">
            <a>감사영상</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="추천작가">
          <Link href="/추천작가">
            <a>추천작가</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="studio">
          <Link href="/studio">
            <a>My Studio</a>
          </Link>
        </Menu.Item>
      </Menu>
      <Carousel effect="fade" autoplay>
        <div>
          <Image
            width={"100%"}
            src="http://blog.salesmanago.com/wp-content/uploads/2015/04/Depositphotos_65204039_original.jpg"
          />
        </div>
        <div style={{ height: "10%" }}>
          <Image
            width={"100%"}
            src="http://blog.salesmanago.com/wp-content/uploads/2015/04/Depositphotos_65204039_original.jpg"
          />
        </div>
      </Carousel>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col xs={24} md={8}>
          <Card
            cover={
              <img src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />
            }
          >
            <Card.Meta title="우리의여행" description="재생시간" />
          </Card>
        </Col>
        <Col xs={24} md={8}>
          <Card
            cover={
              <img src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />
            }
          >
            <Card.Meta title="우리의여행" description="재생시간" />
          </Card>
        </Col>
        <Col xs={24} md={8}>
          <Card
            cover={
              <img src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />
            }
          >
            <Card.Meta title="우리의여행" description="재생시간" />
          </Card>
        </Col>
      </Row>

      {children}
    </div>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
  //   리액트에서 return () 안에 들어가는, 즉 화면에 표시되는 것, 을 node 라고 한다
};

export default AppLayout;
