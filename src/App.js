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
    --basic:#646464;
    --mid-grey:#acabab;
    --bg-mint:#ceede8;
    --bg-grey:#f5f5f5;
    --bg-pink:#f6c8d3;
    --bg-orange:#f9dcaf;
    --bg-purple:#d7c9f1;
    --bg-lime:#e1f2b4;
    --dash: 2px var(--mid-grey) dashed;
    --shadow: 0 4px 5px rgba(0, 0, 0, 0.4);
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
  .font_white{
    color:#ffffff
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
