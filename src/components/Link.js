import React, { useState, useEffect } from "react";

function Link({ Linktext, Link, ImageURL }) {
  const [hover, setHover] = useState();

  useEffect(() => {
    if (hover) {
      document.getElementById(Linktext).style.color = "#1f6f2e";
    } else {
      document.getElementById(Linktext).style.color = "black";
    }
  });
  return (
    <a
      style={row}
      href={Link}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img src={ImageURL} style={image} />
      <h3 style={text} id={Linktext}>
        {Linktext}
      </h3>
    </a>
  );
}

const row = {
  display: "flex",
  flexShrink: 1,
  flexDirection: "row",
  height: "70px",
  width: "90%",
  maxWidth: "500px",
  border: "1px",
  borderStyle: "solid",
  borderColor: "grey",
  alignItems: "center",
  textDecoration: "none",
  boxShadow: "3px 3px 2px #9E9E9E",
  borderRadius: "4px",
  margin: "8px",
  background: "white",
  color: "black",
};

const image = {
  height: "60px",
  width: "auto",
  paddingInline: "4px",
};

const text = {
  flex: 1,
  flexGrow: 1,
  fontSize: "25px",
  color: "black",
  textAlign: "center",
  paddingRight: "8px",
};

export default Link;