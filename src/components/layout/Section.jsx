import React from "react";

const Section = (props) => {
  const { item } = props;
  return <div className="bg-dark p-5">{item}</div>;
};

export default Section;
