import { Route, Routes } from "react-router-dom";
import Month from "./components/Month";
import Daily from "./components/Daily";
import Sidebar from "./components/Sidebar";
import Login from "./components/Login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Daily />}></Route>
        <Route path="/month" element={<Month />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
      <Sidebar />
    </>
  );
}

export default App;
