import { useState, useEffect, useRef } from "react";
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
  box-shadow: var(--shadow);
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

const TaskView = styled.div`
  /* background-color: antiquewhite; */
  height: 5rem;
  height: 70%;
  /* height: 100%; */
  font-size: 1.5rem;
  margin: 0 1rem;
  border-radius: 1.3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  word-break: break-all;

  cursor: pointer;
`;

const InputMyTask = styled.input`
  /* background-color: transparent; */
  height: 70%;
  font-size: 1.5rem;
  border: var(--dash);
  margin: 0 1rem;
  border-radius: 1.3rem;
  /* overflow: auto; */
`;

const TaskInput = ({ task, setTodos }) => {
  const [myGoal, setMyGoal] = useState(task.task);
  const [taskEditMode, setTaskEditMode] = useState(false);
  const thisInputEl = useRef(null);
  // console.log(taskEditMode);

  useEffect(() => {
    if (taskEditMode) {
      thisInputEl.current.focus();
    }
  }, [taskEditMode]);

  const handleTaskBlur = () => {
    setTaskEditMode(false);
  };

  const handleTask = (e) => {
    setMyGoal(e.target.value);
  };
  return (
    <>
      {taskEditMode ? (
        <InputMyTask
          value={myGoal}
          ref={thisInputEl}
          onBlur={handleTaskBlur}
          onChange={handleTask}
          placeholder="fill in your task"
        />
      ) : (
        <TaskView
          onClick={() => {
            setTaskEditMode(true);
          }}
        >
          {myGoal}
        </TaskView>
      )}
    </>
  );
};

const Todo = ({ task, setTodos }) => {
  const [myTag, setMyTag] = useState(task.tag);
  // const [myTask, setMyTask] = useState(task.task);
  const [isOnCheck, setOnCheck] = useState(false);
  const [isOpen, SetisOpen] = useState(false);

  const handleCheck = (e) => {
    setOnCheck(!isOnCheck);
  };
  const handleTag = (e) => {
    setMyTag(e.target.value);
  };

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
      <TaskInput task={task}></TaskInput>

      <CheckBtn onClick={handleCheck}>
        {isOnCheck ? <i className="fa-solid fa-check font_white"></i> : null}
      </CheckBtn>
    </TaskContainer>
  );
};

export default Todo;
