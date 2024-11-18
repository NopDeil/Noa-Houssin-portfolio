import "./Header.scss";

function Header() {
  return (
    <header>
      <nav>
        <div className="logoSection">
          <a href="https://github.com/NopDeil">
          <h2>Noa Houssin</h2>
          </a>
        </div>
        <ul>
          <li><a href="#homeSection">Accueil</a></li>
          <li><a href="#aboutSection">À propos</a></li>
          <li><a href="#skillSection">Compétences</a></li>
          <li><a href="#trainingSection">Formations</a></li>
          <li><a href="#projectSection">Projets</a></li>
          <li><a href="#contactSection">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
