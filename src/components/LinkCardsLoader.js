import React from "react";
import Link from "./Link";
import { loadLinks } from "../loadLinks";

import Async from "react-async";
import LinkEditor from "./LinkEditor";
import { CircularProgress } from "@mui/material";

export default function LinkCardsLoader({ password }) {
  return (
    <div style={linkHolder}>

      <Async promiseFn={loadLinks}>
        {({ data, err, isLoading }) => {
          if (isLoading) {
            return <CircularProgress style={{ margin: "12vh 0" }} />;
          }
          if (err)
            return (
              <div style={statusHolder}>Something went wrong: {err.message}</div>
            );


          if (data) {
            if (password) {
              return data.map(item => {
                const linkData = {
                  title: item.title || "",
                  description: item.description || "",
                  url: item.url || "",
                  imageUrl: item.imageUrl || "",
                  _id: item._id
                };
                return <LinkEditor key={item._id} linkData={linkData} password={password} />;
              });
            } else {
              return <LinkCards data={data} />;
            }
          }
        }}
      </Async>
    </div>
  );
}

function LinkCards({ data }) {
  return (
    <>
      {data.map((element) => {
        return (
          <Link
            key={element._id}
            title={element.title}
            description={element.description}
            url={element.url}
            imageUrl={
              element.imageUrl || "/logo.png"
            }
            alt={element.alt}
          />
        );
      })}
    </>
  );
}

const statusHolder = {
  display: "flex",
  flexShrink: 1,
  flexDirection: "column",
  height: "auto",
  width: "80%",
  maxWidth: "500px",
  border: "1px",
  borderStyle: "solid",
  borderColor: "grey",
  alignItems: "center",
  textDecoration: "none",
  boxShadow: "0px 3px 10px #9E9E9E",
  borderRadius: "4px",
  marginTop: "8px",
  padding: "8px",
  background: "white",
  color: "black",
  textAlign: "center",
};


const linkHolder = {
  flexGrow: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
};
