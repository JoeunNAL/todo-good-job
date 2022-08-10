const Login = () => {
  return (
    <>
      <h1>Who are you?</h1>
      <label for="user_id">ID</label>
      <input id="user_id" type="text" placeholder="ID" />
      <label for="user_password">PASSWORD</label>
      <input id="user_password" type="text" placeholder="PASSWORD" />
      <button>SIGN IN</button>
    </>
  );
};
export default Login;
