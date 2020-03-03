import React, { Fragment } from "react";
import "./App.css";
import { GlobalContextProvider } from "./components/GlobalContextProvider";
import Login from "./components/Login";

function App() {
  return (
    <Fragment>
      <div>LOGIN</div>
      <GlobalContextProvider settings={{ username: "admin", password: "123" }}>
        <Login />
      </GlobalContextProvider>
    </Fragment>
  );
}

export default App;
