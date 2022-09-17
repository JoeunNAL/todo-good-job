import styled from 'styled-components';
const LoginContainer = styled.main`
  background-color: var(--bg-grey);
  height: 100vh;
  flex-grow: 1;

  display: flex;
  justify-content: center;
  align-items: center;

  main {
    background-color: white;
    width: 380px;
    height: 400px;
    border-radius: 0.6rem;
    box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
  }
  .title {
    font-weight: 500;
    font-size: 2.5rem;
    margin-top: 4.5rem;
    margin-bottom: 1rem;
    text-align: center;
  }
  .loginContainer {
    height: 220px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
  }
`;
const InputGroup = styled.div`
  position: relative;

  input {
    background-color: transparent;
    border-style: none;
    border-bottom-style: solid;
    border-bottom-color: #efefef;
    /* border-radius: 0.3rem; */
    /* outline: 2px solid #efefef; */
    width: 240px;
    height: 2.5rem;
    font-size: 1.2rem;
    padding: 12px 12px;
  }
  .inputLabel {
    color: var(--mid-grey);
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(0.5rem, 0.5rem);
    transform-origin: left;
    /* transition: transform 0.25%; */
  }
  input:focus + .inputLabel,
  input:valid + .inputLabel {
    transform: translate(0, -1.2rem) scale(0.9);
    color: var(--bg-purple);
  }
  input:is(:focus, :valid) {
    outline-color: var(--bg-purple);
  }
`;
const Button = styled.button`
  background-color: var(--basic);
  color: white;
  font-size: 0.8rem;
  width: 15rem;
  /* width: 240px; */
  padding: 0.7rem;
  border-radius: 2rem;
  border-style: none;
  cursor: pointer;

  &:active {
    transform: scale(0.98);
  }
`;

const Login = () => {
  return (
    <LoginContainer>
      <main>
        <div className="title font_purple">LOGIN</div>
        <div className="loginContainer">
          <InputGroup>
            <input id="user_id" type="text" required />
            <label for="user_id" className="inputLabel">
              ID
            </label>
          </InputGroup>
          <InputGroup>
            <input id="user_password" type="password" required />
            <label for="user_password" className="inputLabel">
              PASSWORD
            </label>
          </InputGroup>
          <Button>SIGN IN</Button>
        </div>
      </main>
    </LoginContainer>
  );
};
export default Login;
