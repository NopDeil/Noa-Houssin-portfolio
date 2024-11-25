import React, { useState } from "react";
import "./Header.scss";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <nav>
        <div className="logoSection">
          <a href="https://github.com/NopDeil">
            <h2>Noa Houssin</h2>
          </a>
        </div>

        <div className="menuToggle" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={isMenuOpen ? "open" : ""}>
          <li>
            <a href="#homeSection" onClick={() => setIsMenuOpen(false)}>
              Accueil
            </a>
          </li>
          <li>
            <a href="#aboutSection" onClick={() => setIsMenuOpen(false)}>
              À propos
            </a>
          </li>
          <li>
            <a href="#skillSection" onClick={() => setIsMenuOpen(false)}>
              Compétences
            </a>
          </li>
          <li>
            <a href="#trainingSection" onClick={() => setIsMenuOpen(false)}>
              Formations
            </a>
          </li>
          <li>
            <a href="#projectSection" onClick={() => setIsMenuOpen(false)}>
              Projets
            </a>
          </li>
          <li>
            <a href="#contactSection" onClick={() => setIsMenuOpen(false)}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;