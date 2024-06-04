import { useRef, useEffect } from "react";
import useGetMessages from "../../hooks/useGetMessages";
import MessageSkeleton from "../skeletons/MessageSkeleton";
import Message from "./Message";
import useListenMessages from "../../hooks/useListenMessages";
import styles from "./Messages.module.css";

const Messages = () => {
  const { messages, loading } = useGetMessages();
  useListenMessages();
  const lastMessageRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, [messages]);

  return (
    <div className={styles.messagesContainer}>
      {!loading &&
        messages.length > 0 &&
        messages.map((message) => (
          <div key={message._id} ref={lastMessageRef}>
            <Message message={message} />
          </div>
        ))}

      {loading && [...Array(3)].map((_, idx) => (
        <div key={idx} className={styles.messageSkeleton}>
          <MessageSkeleton />
        </div>
      ))}
      {!loading && messages.length === 0 && (
        <p className={styles.emptyMessage}>Send a message to start the conversation</p>
      )}
    </div>
  );
};

export default Messages;
