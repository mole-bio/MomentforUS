import React from "react";
import "antd/dist/antd.css";
import PropTypes from "prop-types";

const MomentforUS = ({ Component }) => {
  return <Component />;
};

MomentforUS.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default MomentforUS;
