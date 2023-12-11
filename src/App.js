import React, { useContext } from "react";
import Header from "./components/Header/header.js";
import Body from "./components/Body/index.js";
import GlobalStyles from "./styles/global";
import { AuthContext } from "./contexts/auth";
import Login from "./components/Login";

const App = () => {
  console.log("opa");
  const { user } = useContext(AuthContext);
  if (!user) return <Login />;

  return (
    <>
      <Header />
      <Body />
      <GlobalStyles />
    </>
  );
};

export default App;
