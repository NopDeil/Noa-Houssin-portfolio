import "./Header.scss";
import Logo from "../../assets/Logo.webp";

function Header() {
  return (
    <header>
      <nav>
        <div className="logoSection">
          <a href="#">
            <img src={Logo} alt="Logo" />
          </a>
        </div>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">My Creations</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
