import { useState } from "react";

export default function AdminLogin(props) {

    const [password, setPassword] = useState("");

    return (
        <div style={wrapperStyles}>
            <h2>Enter admin password to continue</h2>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
            <button style={{marginLeft: "0.8em"}} onClick={() => props.attemptLogin(password)}>Login</button>
        </div>
    );
}

const wrapperStyles = {
    maxWidth: "500px",
    margin: "0 auto",
    padding: "0 1em"
};