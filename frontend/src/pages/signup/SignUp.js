import React, { useState } from "react";
import GenderCheckBox from "./GenderCheckbox.js";
import { Link } from "react-router-dom";
import styles from "./SignUp.module.css";
import useSignup from "../../hooks/useSignup.js";

const SignUp = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const { loading, signup } = useSignup();

  const handleCheckBoxChange = (gender) => {
    setInputs({ ...inputs, gender });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs);
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>
          Sign Up
          <span className={styles.highlight}> ChatNext</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className={styles.label}>
              <span>Full Name</span>
            </label>
            <input
              type="text"
              placeholder="David John"
              className={styles.input}
              value={inputs.fullName}
              onChange={(e) =>
                setInputs({ ...inputs, fullName: e.target.value })
              }
            />
          </div>

          <div>
            <label className={styles.label}>
              <span>Username</span>
            </label>
            <input
              type="text"
              placeholder="davidjohn"
              className={styles.input}
              value={inputs.username}
              onChange={(e) =>
                setInputs({ ...inputs, username: e.target.value })
              }
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
              value={inputs.password}
              onChange={(e) =>
                setInputs({ ...inputs, password: e.target.value })
              }
            />
          </div>

          <div>
            <label className={styles.label}>
              <span>Confirm Password</span>
            </label>
            <input
              type="password"
              placeholder="Confirm password"
              className={styles.input}
              value={inputs.confirmPassword}
              onChange={(e) =>
                setInputs({ ...inputs, confirmPassword: e.target.value })
              }
            />
          </div>

          <GenderCheckBox
            onCheckBoxChange={handleCheckBoxChange}
            selectedGender={inputs.gender}
          />

          <Link to="/login" className={styles.link}>
            Already have an account?
          </Link>
          <div>
            <button className={styles.button} disabled={loading}>
              {loading ? <span className={styles.spinner}></span> : "Sign Up"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
