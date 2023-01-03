import "./login.scss";

const Login = () => {
  return (
    <div className="login">
      <div className="card">
        <div className="right">
          <h1>Hello World.</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            quisquam in distinctio dolorem, mollitia delectus reiciendis magni
            modi! Rerum laboriosam totam, ducimus ut quaerat natus modi dolor
            in, quis ipsa officia nostrum provident consequuntur, debitis vel
            accusantium deleniti neque iste. Molestias deleniti distinctio
            aperiam, impedit accusamus ab neque illo. Aliquid.
          </p>
          <span>Lorem, ipsum dolor.</span>
          <button>Register</button>
        </div>
        <div className="left">
          <h1>Login</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
