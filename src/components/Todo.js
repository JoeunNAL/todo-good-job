import { useState, useEffect } from "react";
import styled from "styled-components";
import { DropdownMenu } from "./DropdownMenu";

const TaskContainer = styled.li`
  background-color: var(--bg-purple);
  width: 200px;
  height: 200px;
  border-radius: 2rem;
  position: relative;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 5px rgba(0, 0, 0, 0.4);
`;

const TodayGoal = styled.input`
  background-color: transparent;
  height: 70%;
  font-size: 1.5rem;
  border: var(--dash);
  margin: 0 10px;
  border-radius: 1.3rem;
  /* word-break: break-all; */
  /* overflow: auto; */
`;
const CheckBtn = styled.button`
  background-color: var(--basic);
  color: white;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border-style: none;
  position: absolute;
  right: 1rem;
  bottom: 1rem;
  &:hover {
    cursor: pointer;
  }
`;

/* 메뉴 내부: 태그, 설정 */
const Menu = styled.div`
  margin: 1rem 1rem 0.5rem 1rem;
  display: flex;
  justify-content: space-between;
`;
const SettingBtn = styled.button`
  background-color: transparent;
  margin-right: 0.3rem;
  border-style: none;
  font-size: 1.2rem;
  position: relative;
  & :hover {
    cursor: pointer;
  }
`;
const Tag = styled.input`
  background-color: white;
  width: 80px;
  border-style: none;
  border-radius: 2rem;
  font-size: 0.7rem;
  font-weight: bolder;
  padding: 0.2rem 0;
  text-align: center;
`;

const Todo = ({ task, setTodos }) => {
  const [myTag, setMyTag] = useState(task.tag);
  const [myGoal, setMyGoal] = useState(task.goal);
  const [onCheck, setOnCheck] = useState(false);
  const [isOpen, SetisOpen] = useState(false);

  const handleGoal = (e) => {
    setMyGoal(e.target.value);
  };
  const handleTag = (e) => {
    setMyTag(e.target.value);
  };
  const handleCheck = (e) => {
    setOnCheck(!onCheck);
    // 배열 이동 추가 작업
  };
  useEffect(() => {
    console.log(onCheck);
  }, [myGoal, onCheck]);

  return (
    <TaskContainer>
      <Menu>
        <div>
          <Tag
            value={myTag}
            onChange={handleTag}
            placeholder="make your Tags"
          />
        </div>
        <SettingBtn onClick={(e) => SetisOpen(!isOpen)}>
          <i className="fa-solid fa-ellipsis">
            {isOpen ? <DropdownMenu /> : null}
          </i>
        </SettingBtn>
      </Menu>
      <TodayGoal
        value={myGoal}
        onChange={handleGoal}
        placeholder="fill in your task"
      ></TodayGoal>

      <CheckBtn onClick={handleCheck}>
        {onCheck ? <i className="fa-solid fa-check font_white"></i> : null}
      </CheckBtn>
    </TaskContainer>
  );
};

export default Todo;
