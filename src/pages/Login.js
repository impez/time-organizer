import React from "react";
import { FormGroup, H5, InputGroup, Intent, Switch } from "@blueprintjs/core";

const Login = () => {
  return (
    <div className="container">
      <form>
        <div class="bp3-input-group .modifier">
          <input
            type="text"
            class="bp3-input"
            placeholder="Enter your username..."
          />
          <span class="bp3-icon bp3-icon-filter"></span>
        </div>
        <div class="bp3-input-group .modifier">
          <input
            type="password"
            class="bp3-input"
            placeholder="Enter your password..."
          />
          <i class="bp3-button bp3-minimal bp3-intent-warning bp3-icon-lock"></i>
        </div>
      </form>
    </div>
  );
};

export default Login;
