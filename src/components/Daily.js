import { useState, useEffect } from "react";
import styled from "styled-components";
import GoalReminder from "./GoalReminder";
import Todo from "./Todo";

const Main = styled.main`
  /* background-color: beige; */
  height: 100vh;
  padding: 0 5rem;
  flex-grow: 1;
  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 1.4rem;
    list-style: none;
  }
`;
const DailyGoalContainer = styled.section`
  /* background-color: aqua; */
  /* height: 100vh; */
  /* width: 90vw; */
  max-width: 80vw;
  display: flex;
  flex-direction: column;
`;
const SetToday = styled.div`
  /* background-color: blue; */
  /* border: 1px red solid; */
  color: var(--mid-grey);
  font-size: 1.5rem;
  height: 2rem;
  margin: 3rem 0 2rem 0;
  display: flex;
  align-items: baseline;
  gap: 1rem;
  input {
    color: var(--basic);
    background-color: transparent;
    border-style: none;
    /* border-radius: 0.4rem; */
    font-size: 2rem;
    /* padding: 0 rem; */
    flex-grow: 1;
  }
`;

/* 포스트 추가 */
const Adder = styled.div`
  border: var(--dash);
  width: 200px;
  height: 200px;
  border-radius: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AddBtn = styled.button`
  background-color: var(--basic);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border-style: none;
  & :hover {
    cursor: pointer;
  }
`;
let idNum = 3;

const Daily = () => {
  const task = { id: idNum, tag: "", task: "" };
  const [todos, setTodos] = useState([task]);
  const [todayGoal, setTodayGoal] = useState("");
  const [serverData, setServerData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/todayGoal", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setServerData(data[0]); //[{id: 1, createdAt: '20220817', todayGoal: '', tasks: Array(2)}]
        setTodos(data[0].tasks);
        setTodayGoal(data[0].todayGoal);
      });
  }, []);

  const handleTodayGoal = () => {};

  const handleAdd = () => {
    idNum++;
    setTodos([...serverData.tasks, task]);
    // fetch("http://localhost:3001/todayGoal/1/", {
    //   method: "PATCH",
    //   headers: {
    //     "Contents-Type": "application/json",
    //     "Access-Control-Allow-Origin": "http://localhost:3001",
    //   },
    //   body: JSON.stringify(),
    // }).then((res) => {
    //   if (!res.ok) {
    //     throw new Error("에러발생");
    //   }
    // });
  };

  return (
    <Main>
      <GoalReminder />
      <DailyGoalContainer>
        <SetToday>
          <i className="fa-solid fa-thumbtack"></i>
          <input
            placeholder="fill in your goal for today"
            value={todayGoal}
            onChange={handleTodayGoal}
          ></input>
        </SetToday>
        <ul>
          {todos.map((todo) => {
            return <Todo key={todo.id} task={todo} setTodos={setTodos} />;
          })}
          <Adder>
            <AddBtn>
              <i
                className="fa-solid fa-plus fa-2x font_white"
                onClick={handleAdd}
              ></i>
            </AddBtn>
          </Adder>
        </ul>
      </DailyGoalContainer>
    </Main>
  );
};
export default Daily;
