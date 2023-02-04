import React, { useState, useEffect } from "react";

function Link({ title, url, description, imageUrl, alt }) {
  return (
    <a
      style={row}
      href={url}
    >
      <img src={imageUrl} style={image} alt={alt} />
      <div style={textStyle}>
        <h3 style={titleStyle}>
          {title}
        </h3>
        {description && <p style={descriptionStyle}>{description}</p>}
      </div>
    </a>
  );
}

const row = {
  display: "flex",
  flexShrink: 1,
  flexDirection: "row",
  minHeight: "70px",
  width: "90%",
  maxWidth: "500px",
  padding: "0.3em 0",
  border: "2px solid var(--colour-1)",
  alignItems: "center",
  textDecoration: "none",
  boxShadow: "0 3px 8px var(--colour-1-shadow)",
  borderRadius: "10px",
  margin: "8px",
  background: "white",
  color: "black",
};

const image = {
  height: "60px",
  width: "auto",
  paddingInline: "8px",
};

const titleStyle = {
  maxHeight: "70px",
  fontSize: "20px",
  color: "black",
  textAlign: "center",
  margin: 0
};

const descriptionStyle = {
  margin: 0,
  textAlign: "center",
};

const textStyle = {
  paddingRight: "8px",
  width: "100%",
  flex: 1,
}

export default Link;
