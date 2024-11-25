import "./Training.scss";

function Training() {
  return (
    <section id="trainingSection">
      <h2>MES FORMATIONS</h2>
      <div className="trainingContainer">
        <div className="training">
          <h3>Baccalauréat STI2D</h3>
          <p>Septembre 2017 - Juillet 2020</p>
        </div>
        <div className="training">
          <h3>DUT MMI</h3>
          <p>Septembre 2020 - Avril 2021</p>
        </div>
        <div className="training">
          <h3>BTS SNIR</h3>
          <p>Septembre 2021 - Juin 2023</p>
        </div>
        <div className="training">
          <h3>Formation Développeur Web OC</h3>
          <p>Avril 2024 - Décembre 2024</p>
        </div>
      </div>
    </section>
  );
}

export default Training;
