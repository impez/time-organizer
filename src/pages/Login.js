import React, { useState, useEffect } from "react";
import { Button } from "@blueprintjs/core";

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="container login">
      <form onSubmit={handleSubmit}>
        <h1>timeorganiza</h1>
        <div className="bp3-input-group .modifier">
          <input
            type="text"
            className="bp3-input"
            placeholder="Enter your username..."
            value={name}
            onChange={handleNameChange}
          />
          <i className="bp3-icon bp3-icon-user "></i>
        </div>
        <div className="bp3-input-group .modifier">
          <input
            type="password"
            className="bp3-input"
            placeholder="Enter your password..."
            value={password}
            onChange={handlePasswordChange}
          />
          <i className="bp3-button bp3-minimal bp3-intent-warning bp3-icon-lock"></i>
        </div>
        <div>
          <Button type="submit" text="Login" />
          <Button type="button" minimal="true">
            Register
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Login;
