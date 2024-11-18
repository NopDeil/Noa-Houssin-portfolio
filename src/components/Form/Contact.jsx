import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import "./Contact.scss";

function ContactForm() {
  const [emailStatus, setEmailStatus] = useState(null);
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [objet, setObjet] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      user_name: nom,
      user_email: email,
      subject: objet,
      message: message,
    };

    emailjs
      .send(
        "service_mss9el6", // Remplace par ton Service ID
        "template_fdv74g5", // Remplace par ton Template ID
        templateParams,
        "dC4YMAn9b1tM7yLiD" // Remplace par ta clé publique
      )
      .then(
        (result) => {
          setEmailStatus("success");
          setNom("");
          setEmail("");
          setObjet("");
          setMessage("");
        },
        (error) => {
          console.error("Erreur lors de l'envoi : ", error.text);
          setEmailStatus("error");
        }
      );
  };

  return (
    <section id="contactSection">
      <div className="contactForm">
        <h2>CONTACTEZ-MOI</h2>
        {emailStatus === "success" && (
          <Alert variant="success">Message envoyé avec succès !</Alert>
        )}
        {emailStatus === "error" && (
          <Alert variant="danger">
            Une erreur est survenue, réessayez plus tard.
          </Alert>
        )}
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="user_name" className="mb-3">
            <Form.Label>Nom</Form.Label>
            <Form.Control
              type="text"
              placeholder="Votre nom"
              value={nom}
              onChange={(e) => setNom(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group controlId="user_email" className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Votre email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group controlId="subject" className="mb-3">
            <Form.Label>Sujet</Form.Label>
            <Form.Control
              type="text"
              placeholder="Votre demande"
              value={objet}
              onChange={(e) => setObjet(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group controlId="formMessage" className="mb-3">
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              rows={5}
              placeholder="Votre message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Envoyer
          </Button>
        </Form>
      </div>
    </section>
  );
}

export default ContactForm;
