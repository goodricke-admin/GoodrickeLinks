import React, { useState } from "react";
import { LoadingButton } from "@mui/lab";
import AdminLogin from "../components/AdminLogin";
import LinkCardsLoader from "../components/LinkCardsLoader";

export default function Admin() {
  const [password, setPassword] = useState(null);
  const [addLinkLoading, setAddLinkLoading] = useState(false);

  return (
    <div>
      {
        !password ?

          <AdminLogin attemptLogin={async password => {
            const res = await fetch("/api/auth/test", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ password })
            });
            if (res.ok) {
              setPassword(password);
              // setLoggedIn(true);
            } else {
              alert("Incorrect password, please try again");
            }
          }} />

          : <LinkCardsLoader password={password} />
      }

      <div style={buttonsStyle}>

        {password &&
          <LoadingButton variant="contained" loading={addLinkLoading} color="success" onClick={async () => {
            setAddLinkLoading(true);
            await fetch("/api/links/add", {
              method: "POST",
              headers: { "Content-type": "application/json" },
              body: JSON.stringify({ password })
            });
            const p = password;
            // trigger rerender of AdminLogin (hence another fetch to get the updated links (bad practice))
            setPassword(null);
            setPassword(p);
            setAddLinkLoading(false);
          }}>Add new link</LoadingButton>
        }

        <a href="/">Back to home</a>
      </div>
    </div>
  );
}

const buttonsStyle = {
  display: "flex",
  justifyContent: "center",
  gap: "2em",
  margin: "2em 0",
  alignItems: "center"
}