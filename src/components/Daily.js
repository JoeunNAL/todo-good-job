import { useState, useEffect } from 'react';
import styled from 'styled-components';
import GoalReminder from './GoalReminder';
import Todo from './Todo';

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
  align-items: center;
  /* align-items: baseline; */
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
const SaveBtn = styled.button`
  /* background-color: var(--mid-grey); */
  background-color: transparent;
  border-style: none;
  outline: 1.6px solid var(--font-orange);
  color: var(--font-orange);
  padding: 0.6rem 1rem;
  border-radius: 1.5rem;
  cursor: pointer;

  &:active {
    transform: scale(0.95);
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
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border-style: none;
  & :hover {
    cursor: pointer;
  }
`;
let idNum = 1;

const Daily = () => {
  const date = new Date();
  const [todos, setTodos] = useState([]);
  const [todayGoal, setTodayGoal] = useState('');
  const [serverData, setServerData] = useState([]);

  // console.log(idNum);
  // console.log(serverData);
  useEffect(() => {
    fetch('http://localhost:3001/todayGoal')
      .then(res => res.json())
      .then(data => {
        setServerData(data[0]); //[{id: 1, createdAt: '20220817', todayGoal: '', tasks: Array(2)}]
        setTodos(data[0].tasks);
        // todos.length > 1 ? (idNum = todos[todos.length - 1].id + 1) : null;
        setTodayGoal(data[0].todayGoal);
      });
  }, []);

  const handleAdd = () => {
    const task = { id: idNum, tag: '', task: '' };
    setTodos([...todos, task]);
    console.log(todos);
  };

  const handleSubmit = () => {
    // const newData = {
    // id:
    // };
    // fetch("http://localhost:3001/todayGoal", {
    //   method: "POST",
    //   headers: {
    //     "Contents-Type": "application/json",
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
      <GoalReminder date={date} />
      <DailyGoalContainer>
        <SetToday>
          <i className="fa-solid fa-thumbtack"></i>
          <input
            placeholder="fill in your goal for today"
            value={todayGoal}
            onChange={e => {
              setTodayGoal(e.target.value);
            }}
          ></input>
          <SaveBtn onClick={handleSubmit}>SAVE</SaveBtn>
        </SetToday>
        <ul>
          {todos.length > 0 &&
            todos.map(todo => {
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
