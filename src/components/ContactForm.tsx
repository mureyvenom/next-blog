import { FormEvent, useRef, useState } from "react";
import classes from "../styles/contact-form.module.css";
import Notification from "./Notification";

interface NotificationProps {
  title: string;
  message: string;
  status: "error" | "pending" | "success" | "";
}

const defaultNotification: NotificationProps = {
  title: "",
  message: "",
  status: "",
};

const ContactForm = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const [messageStatus, setMessageStatus] =
    useState<NotificationProps>(defaultNotification);

  const sendMessage = (e: FormEvent) => {
    e.preventDefault();
    setMessageStatus({
      title: "Sending",
      message: "Sending contact message",
      status: "pending",
    });
    fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify({
        name: nameRef.current?.value,
        email: emailRef.current?.value,
        message: messageRef.current?.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setMessageStatus({
          title: "Success",
          message: data.message,
          status: "success",
        });
      })
      .catch((err) => {
        console.log(err);
        setMessageStatus({
          title: "Error",
          message: err.message,
          status: "error",
        });
      });
    setTimeout(() => {
      setMessageStatus(defaultNotification);
    }, 2000);
  };

  return (
    <section className={classes.contact}>
      <h1>How can I help you</h1>
      <form className={classes.form} onSubmit={sendMessage}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">Your email</label>
            <input type="email" id="email" ref={emailRef} required />
          </div>
          <div className={classes.control}>
            <label htmlFor="name">Your name</label>
            <input type="text" id="name" ref={nameRef} required />
          </div>
        </div>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="message">Your message</label>
            <textarea ref={messageRef} id="name" rows={5} required></textarea>
          </div>
        </div>
        <div>
          <div className={classes.actions}>
            <button>Send message</button>
          </div>
        </div>
      </form>
      {messageStatus.message ? (
        <Notification
          title={messageStatus.title}
          message={messageStatus.message}
          status={messageStatus.status}
        />
      ) : null}
    </section>
  );
};

export default ContactForm;
