import Sidebar from "../../components/sidebar/Sidebar";
import MessageContainer from "../../components/messages/MessageContainer";
import styles from "./Home.module.css";
import useConversation from "../../zustand/useConversation";
import { useState, useEffect } from "react";

const Home = () => {
  const { selectedConversation } = useConversation();
  const [isMobile, setIsMobile] = useState(
    window.matchMedia("(max-width: 769px)").matches
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.matchMedia("(max-width: 769px)").matches);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={styles.container}>
      {!isMobile && (
        <>
          <Sidebar />
          <MessageContainer />
        </>
      )}
      {isMobile && (
        <>{!selectedConversation ? <Sidebar /> : <MessageContainer />}</>
      )}
    </div>
  );
};

export default Home;
