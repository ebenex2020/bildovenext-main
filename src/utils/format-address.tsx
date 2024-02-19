/** @format */

import React from "react";

interface Props {
  address: string;
}

const FormatAddress = ({ address }: Props) => {
  const lines = address.split(",");
  return (
    <>
      {lines.map((line, index) => {
        return <p key={index}>{line}</p>;
      })}
    </>
  );
};

export default FormatAddress;
