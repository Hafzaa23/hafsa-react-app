function Notification({ hasNewMessages }) {
  return (
    <div>
      <h2>Inbox</h2>
      {hasNewMessages && <p>you have new message! </p>}
      {hasNewMessages && <h2>fariin ayaa kuu taal</h2>}
    </div>
  );
}
export default Notification;
