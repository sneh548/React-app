import Login from "../../auth/Login";

const LoginForm = () => {
  return (
    <form>
      <div className="py-2">
        <label htmlFor="email">Your email</label>
        <input type="email" id="email" />
      </div>
      <div className="py-2">
        <label htmlFor="password">password</label>
        <input type="password" id="password" />
      </div>
      <div>
        <input type="submit" value="Login" />
      </div>
    </form>
  );
};

export default LoginForm;
