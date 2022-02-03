import ReactDOM from "react-dom";

import classes from "../styles/notification.module.css";
// import NotificationContext from "../../store/notification-context";

interface NotificationProps {
  title: string;
  message: string;
  status: "error" | "pending" | "success" | "";
}

function Notification({ title, message, status }: NotificationProps) {
  // const [notificationVisible, setNotificationVisible] = useState(false);
  // const notificationCtx = useContext(NotificationContext);

  let statusClasses = "";

  if (status === "success") {
    statusClasses = classes.success;
  }

  if (status === "error") {
    statusClasses = classes.error;
  }

  if (status === "pending") {
    statusClasses = classes.pending;
  }

  const activeClasses = `${classes.notification} ${statusClasses}`;

  return ReactDOM.createPortal(
    <div className={activeClasses}>
      <h2>{title}</h2>
      <p>{message}</p>
    </div>,
    document.getElementById("notification")!
  );
}

export default Notification;
