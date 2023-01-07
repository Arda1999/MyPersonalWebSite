import { useState, useEffect } from "react";
import { Col, Row, Alert } from "react-bootstrap";

export const Newsletter = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (status === "success") clearFields();
  }, [status]);

  const handleSubmit = (e) => {
    e.preventDefault();
    email &&
      email.indexOf("@") > -1 &&
      onValidated({
        EMAIL: email,
      });
  };

  const clearFields = () => {
    setEmail("");
  };

  return (
    <div>
      <h1>
        {`Thanks For Your Attention`}{" "}
        <span
          className="txt-rotate"
          dataPeriod="1000"
          data-rotate='[ "Software Developer" ]'
        >
          <span className="wrap"> </span>
        </span>
      </h1>
    </div>
  );
};
