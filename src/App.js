import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import Month from "./components/Month";
import Daily from "./components/Daily";
import Sidebar from "./components/Sidebar";
import Login from "./components/Login";

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: var(--basic);
  }
  :root {
    --basic:#4b4854;
    --list-color-mint:#ceede8;
    --list-color-grey:#f5f5f5;
    --list-color-pink:#f6c8d3;
    --list-color-orange:#f9dcaf;
    --list-color-purple:#d7c9f1;
    --list-color-lime:#e1f2b4;
  }
  ul {
    display: flex;
    gap: 2.5rem;
    flex-wrap: wrap;
    list-style: none;
  }
  .double_size{
    font-size: 1.5rem;
  }
  .font_purple{
    color: #ac79f0
  }
  .font_orange{
    color:#ff9a62;
  }
  .font_lime{
    color:#aed063
  }
`;

const Container = styled.div`
  display: flex;
`;

function App() {
  return (
    <Container>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Daily />}></Route>
        <Route path="/month" element={<Month />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
      <Sidebar />
    </Container>
  );
}

export default App;
