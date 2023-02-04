import React from "react";
import { MdSettings } from "react-icons/md";
import IconButton from "@mui/material/IconButton";
import Socials from "../components/Socials";
import LinkCardsLoader from "../components/LinkCardsLoader";

function Home() {
  return (
    <div style={holder}>
      <div style={centerContainer}>
        <img src="/logo-name.png" style={logoStyle}/>
        <LinkCardsLoader />
        <Socials style={{ alignSelf: "end" }} />
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <p style={{ textAlign: "center", margin: "5px", fontSize: "0.9em", fontWeight: 500, lineHeight: 1.2 }}>
            Designed and developed by{" "}
            <a href="mailto:hew550@york.ac.uk">
              Harry&nbsp;Wickham
            </a> @ <a href="https://yordevs.com/">Yordevs</a>.
            Updated by <a href="mailto:gh1100@york.ac.uk"> George&nbsp;Howarth</a>.
        </p>
        <IconButton href="/admin">
          <MdSettings size="20" />
        </IconButton>
      </div>
    </div>
  );
}

const holder = {
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  width: "100vw",
  height: "100vh",
  background: "linear-gradient(#eefff6, #ccffd6)"
};

const centerContainer = {
  justifyContent: "space-between",
  alignItems: "center",
  flexGrow: 1,
  flexDirection: "column",
  display: "flex",
  width: "inherit",
};

const logoStyle = {
  height: "8vh",
  margin: "1em 0"
};

export default Home;
