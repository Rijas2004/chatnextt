import React from "react";
import styles from "./GenderCheckBox.module.css";

const GenderCheckBox = ({ onCheckBoxChange, selectedGender }) => {
  return (
    <div className={styles.container}>
      <div className={styles.formControl}>
        <label
          className={`${styles.label} ${selectedGender === "male" ? styles.selected : ""}`}
        >
          <span className={styles.labelText}>Male</span>
          <input
            type="checkbox"
            className={styles.checkbox}
            checked={selectedGender === "male"}
            onChange={() => onCheckBoxChange("male")}
          />
        </label>
      </div>
      <div className={styles.formControl}>
        <label
          className={`${styles.label} ${selectedGender === "female" ? styles.selected : ""}`}
        >
          <span className={styles.labelText}>Female</span>
          <input
            type="checkbox"
            className={styles.checkbox}
            checked={selectedGender === "female"}
            onChange={() => onCheckBoxChange("female")}
          />
        </label>
      </div>
    </div>
  );
};

export default GenderCheckBox;
