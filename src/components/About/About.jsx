import "./About.scss";
import Button from 'react-bootstrap/Button';

function About() {
  return (
    <section id="aboutSection">
      <article>
        <h2>À propos de moi</h2>
        <p>
          En tant que développeur web, je suis passionné par la création
          d'interfaces intuitives et réactives. Mon objectif est de bâtir des
          expériences utilisateur fluides et performantes, en exploitant des
          outils modernes comme HTML, CSS, JavaScript, et React. Chaque projet
          est pour moi l'occasion de mêler créativité et expertise technique
          pour réaliser des solutions sur mesure qui répondent aux besoins des
          utilisateurs.
        </p>
        <p>
          Autonome et curieux, j’aime relever de nouveaux défis en explorant des
          technologies de pointe et en perfectionnant constamment mes
          compétences. Mon objectif est d’offrir des solutions innovantes qui
          répondent aux besoins des utilisateurs tout en restant simples et
          efficaces. Si vous recherchez un développeur motivé pour donner vie à
          vos projets web, n’hésitez pas à me contacter pour en discuter.
        </p>
        <Button variant="warning" href="https://github.com/NopDeil">GITHUB</Button>{' '}
        <Button variant="light">MON CV</Button>{' '}
      </article>
    </section>
  );
}

export default About;
