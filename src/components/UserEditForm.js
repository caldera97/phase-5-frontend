// import { useState } from "react";
// function UserEditForm() {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   const [newUsername, setNewUsername] = useState("");
//   const [newPassword, setNewPassword] = useState("");
//   const [passwordConfirm, setPasswordConfirm] = useState("");

//   function handleSubmit(e) {
//     e.preventDefault()
//     newPassword === passwordConfirm
//    ? fetch("/editUser", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         auth_username: username,
//         auth_password: password,
//         "password-confirmation": passwordConfirm,
//         username: newUsername,
//         password: newPassword,
//       }),
//     })
//     : alert("passwords must match!");
//   }

//   return (
//     <div className="login-page">
//       <div className="form">
//         <form className="login-form" onSubmit={handleSubmit}>
//           <p className="message">Current credentials</p>
//           <input type="text" required placeholder="username" onChange={(e) => setUsername(e.target.value)} />
//           <input type="password" required placeholder="password" onChange={(e) => setPassword(e.target.value)} />
//           <p className="message">New credentials</p>
//           <input type="text" required placeholder="username" onChange={(e) => setNewUsername(e.target.value)} />
//           <input type="password" required placeholder="password" onChange={(e) => setNewPassword(e.target.value)} />
//           <input type="text" required placeholder="confirm password" onChange={(e) => setPasswordConfirm(e.target.value)}/>
//           <button type="submit">update acct</button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default UserEditForm
//current creds must be matched at backend and if they match then new credentials will be used
