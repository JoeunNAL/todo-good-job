import styled from "styled-components";
import { monthGoals } from "../data";

const Section = styled.section`
  /* background-color: orange; */
  /* width: 85vw; */
  margin-top: 4rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;

  .reminder {
    background-color: var(--bg-grey);
    width: 88%;
    /* border: var(--dash); */
    border-radius: 0.8rem;

    /* height: ; */
    padding: 0.7rem 1.5rem;
    font-size: 1.8rem;
  }
  .localDate {
    /* color: var(--font-orange); */
    font-size: 2.8rem;
    font-weight: 500;
    /* background-color: bisque; */

    /* margin-top: 5px; */
    transform: translateY(0.2rem);
    /* vertical-align: middle; */
  }
`;

const DateContainer = styled.div`
  background-color: #ceede8;
  width: 8.5rem;
  gap: 0.5rem;
  /* border: 1.5px var(--basic) solid; */
  border-radius: 0.8rem;
  padding: 0 0.8rem;

  display: flex;
  justify-content: end;
  align-items: center;
`;

const ColumDiv = styled.div`
  /* background-color: aliceblue; */
  max-width: 5rem;
  display: flex;

  transform: translateY(0.1rem);

  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  div {
    /* color: white; */
    font-weight: bold;
  }
  div:first-child {
    font-size: 0.8rem;
  }
`;

const GoalReminder = () => {
  const date = new Date();
  const localMonth = date.toLocaleDateString()[6];
  const localYear = date.toLocaleDateString().slice(0, 4);
  const localDate = date.toLocaleDateString().slice(9, 11);
  // console.log(localMonth, localYear, localDate);

  return (
    <Section>
      <DateContainer>
        <ColumDiv>
          <div className="fontS_08">{localYear}</div>
          <div>{monthGoals[localMonth - 1].month}</div>
        </ColumDiv>
        <div className="localDate">{localDate}</div>
      </DateContainer>
      <div className="reminder">{monthGoals[localMonth - 1].monthlyGoal}</div>
    </Section>
  );
};
export default GoalReminder;
