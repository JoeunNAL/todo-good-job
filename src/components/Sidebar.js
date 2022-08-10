import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <nav>
      {/* 로고 <img></img> */}
      <Link to="/login">Mypage</Link>
      <Link to="/">Daily</Link>
      <Link to="/month">Month</Link>
    </nav>
  );
};
export default SideBar;
