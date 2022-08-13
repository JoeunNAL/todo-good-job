import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = styled.nav`
  width: 6rem;
  /* float:right; */
  margin-right: 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
`;

const Div = styled.div`
  margin-top: 2rem;
  font-weight: bold;
`;

const Logo = styled.div`
  background: var(--basic);
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const SideBar = () => {
  return (
    <Nav>
      <Div>7DAYs</Div>
      <Logo></Logo>
      {/* 로고 <img></img> */}
      <Link to="/login">
        <i className="fa-solid fa-right-to-bracket double_size font_orange"></i>
      </Link>
      <Link to="/">
        <i className="fa-solid fa-list-check double_size font_purple"></i>
      </Link>
      <Link to="/month">
        <i className="fa-solid fa-calendar-check double_size font_lime"></i>
      </Link>
    </Nav>
  );
};

export default SideBar;
