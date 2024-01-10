import "../../styles/main.scss";

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
