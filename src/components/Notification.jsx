import React, { useEffect } from "react";
import Alert from "./Alert";

const Notification = ({
  message,
  type = "info",
  duration = 3000,
  onClose,
  className = "",
}) => {
  useEffect(() => {
    if (duration) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [duration, onClose]);

  return (
    <div
      className={`fixed top-4 right-4 z-50 animate-slide-down ${className}`}
      role="alert"
    >
      <Alert variant={type} onClose={onClose}>
        {message}
      </Alert>
    </div>
  );
};

export default Notification;
