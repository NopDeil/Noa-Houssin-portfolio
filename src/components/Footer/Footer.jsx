import "./Footer.scss";

function Footer() {
  return (
    <footer>
      <div>
        <div className="reseaux">
        <ul>
          <li>
            <a href="https://github.com/NopDeil">
              <i className="fab fa-square-github"></i>
            </a>
          </li>
          <li>
            <a href="mailto:noa.houssin@hotmail.com"><i className="fa-solid fa-comment-dots"></i></a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/nh835/"><i className="fab fa-linkedin"></i></a>
          </li>
        </ul>
        </div>
        <p>© 2024 Noa Houssin, Tous droits réservés.</p>
      </div>
    </footer>
  );
}

export default Footer;
