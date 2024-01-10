import "../../styles/main.scss";

/**
 * Composant qui représente une section d'information sur la nourriture.
 * @component
 * @param {Object} props - Les propriétés du composant.
 * @param {string} props.icon - Le chemin de l'icône de nourriture.
 * @param {string} props.value - La valeur numérique associée à la nourriture.
 * @param {string} props.name - Le nom de la nourriture.
 * @returns {JSX.Element} - Élément JSX représentant la section d'information sur la nourriture.
 */

export default function Food(props) {
  return (
    <div className="foodContainer">
      <img className="food-icon" src={props.icon} alt="food icon" />
      <div className="food-info">
        <p className="food-value">{props.value}</p>
        <p className="food-name">{props.name}</p>
      </div>
    </div>
  );
}
