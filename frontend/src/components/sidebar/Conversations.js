import useGetConversations from "../../hooks/useGetConversations";
import { getRandomEmoji } from "../../utils/emojis";
import Conversation from "./Conversation";
import styles from "./Conversations.module.css";

const Conversations = () => {
  const { loading, conversations } = useGetConversations();
  return (
    <div className={styles.container}>
      {conversations.map((conversation, idx) => (
        <Conversation
          key={conversation._id}
          conversation={conversation}
          emoji={getRandomEmoji()}
          lastIdx={idx === conversations.length - 1}
        />
      ))}

      {loading ? (
        <span className={styles.loadingSpinner}></span>
      ) : null}
    </div>
  );
};

export default Conversations;
