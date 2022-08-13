import styled from "styled-components";
import { monthGoals } from "../data";

const Main = styled.main`
  /* background-color: beige; */
  flex-grow: 1;
`;

const H2 = styled.h2`
  /* background-color: antiquewhite; */
  font-size: 2.5rem;
  text-align: center;
  margin-top: 4.8rem;
  margin-bottom: 3.5rem;
`;
const Ul = styled.ul`
  justify-content: center;
`;

const GoalContainer = styled.li`
  width: 250px;
  height: 150px;
  border-radius: 2rem;
  background-color: var(--list-color-grey);
  box-shadow: 0 4px 5px rgba(0, 0, 0, 0.4);
`;

const ThisMonth = styled.h4`
  font-size: 1.5rem;
  text-align: center;
  transform: translateY(-0.8rem);
`;

const Goal = styled.div`
  /* border: 1px red dotted; */
  height: 70%;
  margin: 5px 15px;
  border-radius: 1.3rem;
  word-break: break-all;
  font-size: 1.5rem;
  text-align: center;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Month = () => {
  const handleGoal = () => {};
  return (
    <Main>
      <H2>2022 Goals</H2>
      <Ul>
        {monthGoals.map((goal) => {
          return (
            <GoalContainer key={goal.id}>
              <ThisMonth>{`${goal.month.slice(0, 3)}.`}</ThisMonth>
              <Goal onClick={handleGoal}>{goal.monthlyGoal}</Goal>
            </GoalContainer>
          );
        })}
      </Ul>
    </Main>
  );
};
export default Month;
