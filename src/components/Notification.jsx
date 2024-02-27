const Notification = ({ message }) => {
  if (!message) return null;
  return (
    <div
      className="notification"
      style={{
        fontSize: '22px',
        backgroundColor: '#f0f0f0',
        color: 'green',
        padding: '10px',
        marginBottom: '10px',
        borderRadius: '5px',
        border: '3px solid green',
      }}
    >
      {message}
    </div>
  );
};

export default Notification;
