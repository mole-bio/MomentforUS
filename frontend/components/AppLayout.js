import React from "react";
import PropTypes from "prop-types";
import { Header, Content, Footer } from "antd";

const AppLayout = ({ children }) => {
  return <div>{children}</div>;
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
