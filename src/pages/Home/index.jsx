import { useParams } from "react-router-dom";
import "../../styles/main.scss";
import { Navbar } from "../../components/Navbar";
import { Sidebar } from "../../components/Sidebar";
import { FetchRoutes } from "../../services/fetchRoutes";
import DailyActivity from "../../components/DailyActivity";
import AverageSessions from "../../components/AverageSessions";
import Performance from "../../components/Performance";
import Objective from "../../components/Objective";
import Food from "../../components/Food";
import CalorieIcon from "../../assets/FoodIcon/calories-icon.png";
import ProteinesIcon from "../../assets/FoodIcon/protein-icon.png";
import GlucidesIcon from "../../assets/FoodIcon/carbs-icon.png";
import LipidesIcon from "../../assets/FoodIcon/fat-icon.png";

/**
 * Composant principal de l'application représentant la page du tableau de bord.
 * @component
 * @returns {JSX.Element} - Élément JSX représentant la page du tableau de bord.
 */

export default function App() {
  const { userId } = useParams();
  const { userData, activityData, avgSessionsData, performanceData } =
    FetchRoutes(userId);

  // Vérifie si les données sont bien chargées
  if (!userData || !activityData || !avgSessionsData || !performanceData) {
    return <div>Loading...</div>;
  }

  console.log(userData);

  return (
    <div>
      <Navbar />
      <main>
        <Sidebar />
        <section>
          <div className="mainContainer">
            <h1>
              Bonjour{" "}
              <span className="name">{userData?.userInfos?.firstName}</span>
            </h1>
            <p className="subtitle">
              Félicitation ! Vous avez explosez vos objectifs hier 👏
            </p>
          </div>
          <div className="charts">
            <div className="chartsLeft">
              <div className="dailyActivityChart allCharts">
                <DailyActivity data={activityData} />
              </div>
              <div className="chartsBottom">
                <div className="sessionsChart allCharts">
                  <AverageSessions data={avgSessionsData} />
                </div>
                <div className="performanceChart allCharts">
                  <Performance data={performanceData} />
                </div>
                <div className="objectiveChart allCharts">
                  <Objective data={userData} />
                </div>
              </div>
            </div>
            <div className="chartsRight">
              <div className="calories allCharts">
                <Food
                  icon={CalorieIcon}
                  name="Calories"
                  value={userData?.keyData?.calorieCount + "kCal"}
                />
              </div>
              <div className="proteins allCharts">
                <Food
                  icon={ProteinesIcon}
                  name="Protéines"
                  value={userData?.keyData?.proteinCount + "g"}
                />
              </div>
              <div className="glucides allCharts">
                <Food
                  icon={GlucidesIcon}
                  name="Glucides"
                  value={userData?.keyData?.carbohydrateCount + "g"}
                />
              </div>
              <div className="lipides allCharts">
                <Food
                  icon={LipidesIcon}
                  name="Lipides"
                  value={userData?.keyData?.lipidCount + "g"}
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
