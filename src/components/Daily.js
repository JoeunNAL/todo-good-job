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
const Daily = () => {
  let idNum = 1;
  const task = { id: idNum, tag: "", goal: "" };
  const [todos, setTodos] = useState([task]);
  // const []
  useEffect(() => {
    // fetch("http://localhost:3001/todayTasks", {
    //   method: "POST",
    //   headers: { "Contents-Type": "application/json" },
    //   body: JSON.stringify(task),
    // })
    //   .then((res) => {
    //     res.json();
    //     // setTodos(response);
    //   })
    //   .then((d) => {
    //     console.log(d);
    //   });
  }, []);
  const handleAdd = () => {
    idNum++;
    setTodos([...todos, task]);
    // fetch("http://localhost:3001/todayTasks", {
    //   method: "POST",
    //   headers: { "Contents-Type": "application/json" },
    //   body: JSON.stringify(task),
    // }).then((response) => {
    //   setTodos(response);
    // });
  };
  return (
    <Main>
      <GoalReminder />
      <DailyGoalContainer>
        <SetToday>
          <i className="fa-solid fa-thumbtack"></i>
          <input placeholder="fill in your goal for today"></input>
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
