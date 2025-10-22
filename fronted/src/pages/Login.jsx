import React, { useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      setMessage(data.message);
    } catch (err) {
      setMessage("Login failed.");
    }
  };

  return (
    <div className="form-wrapper">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input name="username" onChange={handleChange} placeholder="Username" />
        <input
          name="password"
          type="password"
          onChange={handleChange}
          placeholder="Password"
        />
        <button type="submit">Login</button>
        <p>{message}</p>
      </form>
    </div>
  );
};

export default Login;

