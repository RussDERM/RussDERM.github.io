import React from "react";
import logo from "./logo.svg";
import "./App.css";

// * Component Imports
import NavBarComp from "./components/Nav/Nav";
import JumboTronComp from "./components/JumboTron/JumboTron";
import Container from "react-bootstrap/Container";

function App() {
  return (
    <Container>
      <NavBarComp />
      <JumboTronComp />
    </Container>
  );
}

export default App;
