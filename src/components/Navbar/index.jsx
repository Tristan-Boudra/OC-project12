import logoSportSee from "../../assets/logoSportSee.png";
import "../../styles/main.scss";

/**
 * Composant qui représente la barre de navigation.
 * @component
 * @returns {JSX.Element} - Élément JSX représentant la barre de navigation.
 */

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
