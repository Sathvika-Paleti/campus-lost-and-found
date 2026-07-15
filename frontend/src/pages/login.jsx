import { useState } from "react";
import axios from "axios";

function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const login = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://127.0.0.1:8000/users/login",
        user
      );

      localStorage.setItem("token", res.data.access_token);

      alert("Login Successful");
    } catch (err) {
      alert("Invalid Email or Password");
    }
  };

  return (
    <div style={{ width: "400px", margin: "50px auto" }}>
      <h2>Campus Lost & Found</h2>

      <form onSubmit={login}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />
        <br /><br />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
        />
        <br /><br />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;