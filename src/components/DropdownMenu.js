import styled from "styled-components";
const DropdownContainer = styled.div`
  background-color: var(--bg-grey);
  position: absolute;
  right: -1rem;
  width: 5rem;
  border-radius: 10px;
`;
const Div = styled.div`
  font-size: 1rem;
  border-radius: 5px;

  margin: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.3rem;

  span:hover {
    color: blueviolet;
  }
`;

export const Dropdownitem = ({ icon, text }) => {
  const handleClick = (e) => {
    // console.log(e.target, typeof e.target);
    // const colorMenu = /색상/;
    // if(e.target.test(colorMenu)){
    //   // 색상변경
    // }
  };
  return (
    <Div onClick={handleClick}>
      <span>{icon}</span>
      <span>{text}</span>
    </Div>
  );
};
// const dropMenu =[];

export const DropdownMenu = () => {
  return (
    <DropdownContainer>
      <Dropdownitem
        icon={<i className="fa-solid fa-eraser"></i>}
        text={"제거"}
      ></Dropdownitem>
      <Dropdownitem
        icon={<i className="fa-solid fa-palette"></i>}
        text={"색상"}
      ></Dropdownitem>
    </DropdownContainer>
  );
};
// export default DropdownMenu;
