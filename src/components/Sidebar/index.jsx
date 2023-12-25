import "../../styles/main.scss";
import iconBike from "../../assets/Sidebar/iconBike.png";
import iconDumbbell from "../../assets/Sidebar/iconDumbbell.png";
import iconSwim from "../../assets/Sidebar/iconSwim.png";
import iconZen from "../../assets/Sidebar/iconZen.png";

export function Sidebar() {
  return (
    <aside>
      <ul>
        <li>
          <img src={iconBike} alt="Icon bike" />
        </li>
        <li>
          <img src={iconDumbbell} alt="Icon dumbbell" />
        </li>
        <li>
          <img src={iconSwim} alt="Icon swim" />
        </li>
        <li>
          <img src={iconZen} alt="icon zen" />
        </li>
      </ul>
      <p>Copiryght, SportSee 2020</p>
    </aside>
  );
}
