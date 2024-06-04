import { TiMessages } from "react-icons/ti";
import { IoArrowBackCircleOutline } from "react-icons/io5";

import useConversationStore from "../../zustand/useConversation";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
import { useAuthContext } from "../../context/AuthContext";
import useListenMessages from "../../hooks/useListenMessages";
import styles from "./MessageContainer.module.css";

const MessageContainer = () => {
  const { selectedConversation, setSelectedConversation } =
    useConversationStore();

  useListenMessages();

  const isMobile = window.matchMedia("(max-width: 769px)").matches;

  const handleBackClick = () => {
    setSelectedConversation(null);
  };

  return (
    <div className={styles.container}>
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          <div className={styles.header}>
            {isMobile && (
              <button onClick={handleBackClick}>
                <IoArrowBackCircleOutline />
              </button>
            )}
            <span className={styles.labelText}>To:</span>{" "}
            <span className={styles.fullName}>
              {selectedConversation.fullName}
            </span>
          </div>
          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
};

export default MessageContainer;

const NoChatSelected = () => {
  const { authUser } = useAuthContext();
  return (
    <div className={styles.noChat}>
      <p>Welcome 👋 {authUser.fullName} ❄</p>
      <p>Select a chat to start messaging</p>
      <TiMessages className={`${styles.icon} ${styles.iconMd}`} />
    </div>
  );
};
