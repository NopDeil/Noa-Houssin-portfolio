import "./Card.scss";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function Cards({ title, description, github, project_link, image }) {
  return (
    <Card>
      <Card.Img variant="top" src={image} alt={title} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <div className="cardBtn">
          <Button
            href={github}
            variant="primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Voir GitHub
          </Button>
          <Button
            href={project_link}
            variant="secondary"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2"
          >
            Voir Projet
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default Cards;
