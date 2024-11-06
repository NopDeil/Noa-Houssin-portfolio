import ParticlesComponent from "../ParticlesComponent/ParticlesComponent";
import "./Home.scss";

function Home() {
  return (
    <section id="homeSection">
      <ParticlesComponent />
      <h1>
        Noa <br /> Houssin
      </h1>
      <h2>Développeur Web Frontend</h2>
      <p>
        Développeur frontend spécialisé dans des solutions web créatives et
        réactives, je transforme vos idées en interfaces fluides et dynamiques !
      </p>
        <button className="home-btn">Contact me</button>
    </section>
  );
}

export default Home;
