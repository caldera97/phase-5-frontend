function LoginSignup() {

    return <div className="login-page">
  <div className="form">
    <form className="register-form">
      <p className="message">Sign Up</p>
      <input type="text" required placeholder="username"/>
      <input type="password" required placeholder="password"/>
      <input type="text" required placeholder="confirm password"/>
      <button>sign up</button>
    </form>
    <form className="login-form">
      <p className="message">Login</p>
      <input type="text" required placeholder="username"/>
      <input type="password" required placeholder="password"/>
      <button>login</button>
    </form>
  </div>
</div>
}

export default LoginSignup