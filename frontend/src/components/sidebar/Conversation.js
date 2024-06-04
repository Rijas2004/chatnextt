import { useSocketContext } from "../../context/SocketContext";
import useConversationStore from "../../zustand/useConversation";
import styles from "./Conversation.module.css";

const Conversation = ({ conversation, lastIdx, emoji }) => {
  const { selectedConversation, setSelectedConversation } =
    useConversationStore();

  const isSelected = selectedConversation?._id === conversation._id;
  const { onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(conversation._id);

  return (
    <>
      <div
        className={`${styles.container} ${styles.hoverBg} ${
          isSelected ? styles.selected : ""
        }`}
        onClick={() => setSelectedConversation(conversation)}
      >
        <div className={`${styles.avatar} ${isOnline ? styles.avatarOnline : ""}`}>
          <div className={styles.imgWrapper}>
            <img src={conversation.profilePic} alt="user avatar" />
          </div>
        </div>

        <div className={styles.flexColumn}>
          <div className={styles.flexGap}>
            <p className={styles.fontBold}>{conversation.fullName}</p>
            <span className={styles.textXl}>{emoji}</span>
          </div>
        </div>
      </div>

      {!lastIdx && <div className={styles.divider} />}
    </>
  );
};

export default Conversation;
