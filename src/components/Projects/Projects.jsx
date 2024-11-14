import "./Projects.scss";
import datas from "../../datas/projects.json";
import Cards from "../Card/Card";
import Button from 'react-bootstrap/Button';

function Projects() {


    return ( <section id="projectSection">
        <h2>MES PROJETS</h2>
        <div className="buttons">
        <Button variant="warning">Tous</Button>{' '}
        <Button variant="warning">Frontend</Button>{' '}
        <Button variant="warning">Backend</Button>{' '}
        <Button variant="warning">SEO</Button>{' '}
        </div>
        <div className="gallery">
            {datas.map(data => {
                return (
                    <Cards
                        key={data.id}
                        title={data.title}
                        description={data.description}
                        image = {data.image}
                        github = {data.github}
                        project_link = {data.projectLink}
                    />
                )
            })}
            </div>
        </section> );
}

export default Projects;