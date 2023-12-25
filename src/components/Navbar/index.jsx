import logoSportSee from "../../assets/logoSportSee.png";
import "../../styles/main.scss";

export function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <img src={logoSportSee} alt="Logo SportSee" className="logo" />
        </li>
        <li>
          <a href="/">Accueil</a>
        </li>
        <li>
          <a href="/">Profil</a>
        </li>
        <li>
          <a href="/">Paramètres</a>
        </li>
        <li>
          <a href="/">Communauté</a>
        </li>
      </ul>
    </nav>
  );
}
