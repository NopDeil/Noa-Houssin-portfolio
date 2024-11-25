import "./Card.scss";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";


function Cards({ title, description, github, project_link, image, technologies}) {

  return (
    <Card>
      <Card.Img src={require(`../../assets/${image}`)} alt={title} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <hr />
        <div className="technologies">
          {technologies.map((tech, index) => (
            <span key={index} className="tech-icon">
              <i className={tech.icon}></i>
            </span>
          ))}
        </div>
        <div className="cardBtn">
          <Button
            className="btn"
            href={github}
            variant="primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Voir GitHub
          </Button>
          {project_link ? (
            <Button
              className="btn"
              href={project_link}
              variant="secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Voir Projet
            </Button>
          ) : null}
        </div>
      </Card.Body>
    </Card>
  );
}

export default Cards;
