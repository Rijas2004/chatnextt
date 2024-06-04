import { useAuthContext } from "../../context/AuthContext";
import { extractTime } from "../../utils/extractTime";
import useConversationStore from "../../zustand/useConversation";
import styles from "./Message.module.css";

const Message = ({ message }) => {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversationStore();
  const fromMe = message.senderId === authUser._id;
  const formattedTime = extractTime(message.createdAt);
  const chatClassName = fromMe ? styles.chatEnd : styles.chatStart;
  const profilePic = fromMe
    ? authUser.profilePic
    : selectedConversation?.profilePic;
  const bubbleBgColor = fromMe ? styles.bgBlue500 : "";

  const shakeClass = message.shouldShake ? styles.shake : "";

  return (
    <div className={`${styles.chat} ${chatClassName}`}>
      <div className={styles.avatar}>
        <img alt="Profile" src={profilePic} />
      </div>
      <div className={styles.message}>
        <div
          className={`${styles.chatBubble} ${shakeClass} ${bubbleBgColor} ${styles.pb2}`}
        >
          {message.message}
        </div>
        <div className={styles.chatFooter}>{formattedTime}</div>
      </div>
    </div>
  );
};

export default Message;
