import React from "react";
import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
import SearchInput from "./SearchInput";
import styles from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <div className={styles.container}>
      <SearchInput />
      <div className={styles.divider}></div>
      <Conversations />
      <LogoutButton />
    </div>
  );
};

export default Sidebar;
