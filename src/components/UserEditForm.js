function UserEditForm() {
  return (
    <div className="login-page">
      <div className="form">
        <form className="login-form">
          <p className="message">Current credentials</p>
          <input type="text" required placeholder="username" />
          <input type="password" required placeholder="password" />
          <p className="message">New credentials</p>
          <input type="text" required placeholder="username" />
          <input type="password" required placeholder="password" />
          <input type="text" required placeholder="confirm password" />
          <button>update acct</button>
        </form>
      </div>
    </div>
  );
}

export default UserEditForm
//current creds must be matched at backend and if they match then new credentials will be used
