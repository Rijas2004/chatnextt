import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Login.module.css";
import useLogin from "../../hooks/useLogin";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { loading, login } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username, password);
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>
          Login
          <span className={styles.highlight}> ChatNext</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className={styles.label}>
              <span>Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter username"
              className={styles.input}
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          </div>

          <div>
            <label className={styles.label}>
              <span>Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter password"
              className={styles.input}
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <Link to="/signup" className={styles.link}>
            {"Don't"} have an account?
          </Link>
          <div>
            <button className={styles.button} disabled={loading}>
              {loading ? <span className={styles.spinner}></span> : "Login"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
