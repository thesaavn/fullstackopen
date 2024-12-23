const Notification = ({notification}) => {
  return (
    <div className={notification.style}>
      <p>{notification.text}</p>
    </div>
  )
}

export default Notification