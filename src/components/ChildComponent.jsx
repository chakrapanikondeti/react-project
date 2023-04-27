import React, { useState } from "react";

export default function ChildComponent(props) {
  return (
    <>
      <h2>count: {props.countvalue}</h2>
    </>
  );
}
