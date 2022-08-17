import { useState, useEffect } from "react";
import styled from "styled-components";
// import { monthGoals } from "../data";

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
  const localMonth = date.toLocaleString("en-US", { month: "long" });
  const localYear = date.toLocaleDateString().slice(0, 4);
  const localDate = date.toLocaleDateString().slice(9, 11);
  // console.log("GoalReminder에 있는", date.toLocaleDateString()); // 2022. 8. 17.
  const [beforeReq, setBeforReq] = useState(true);
  let monthGoals;
  useEffect(() => {
    fetch("http://localhost:3001/monthGoals", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((monthDatas) => {
        monthGoals = monthDatas;
        // setBeforReq(false);
        console.log("리멤버컴포넌트", monthGoals[date.getMonth()].monthlyGoal);
      })
      .then(() => {
        setBeforReq(false);
      });
  }, [monthGoals]);

  return (
    <Section>
      <DateContainer>
        <ColumDiv>
          <div className="fontS_08">{localYear}</div>
          <div>{localMonth}</div>
        </ColumDiv>
        <div className="localDate">{localDate}</div>
      </DateContainer>
      <div className="reminder">
        fill in your Month Goal in other page.
        {/* {beforeReq ? "설정해주세요" : monthGoals[date.getMonth()].monthlyGoal} */}
      </div>
    </Section>
  );
};
export default GoalReminder;
