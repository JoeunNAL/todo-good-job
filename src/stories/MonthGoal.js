import styled from "styled-components";

export const Postit = styled.article`
  /* padding: 2rem; */
  width: 200px;
  height: 130px;
  background-color: #C1A7E5;
  /* background-color: #B08CE3; */
  border-radius: 1.2rem;
  word-break: break-all;
  padding: 1rem;
  /* gap: 0.5rem; */

  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const H3 = styled.h3`
  margin: 0.5rem 0rem;
`;

export const Goal = styled.div`
  /* background-color: gray; */
  /* width: 90%; */
  font-size: 1.2rem;
  word-break: break-all;
  /* width: 100%; */

  flex-grow: 1;
  display : flex;
  align-items : center;
  justify-content : center;
`;

export const MonthGoal=({month, text})=>{
  return(
    <Postit>
      <H3>{month}</H3>
      <Goal>{text}</Goal>
    </Postit>
  )
}
