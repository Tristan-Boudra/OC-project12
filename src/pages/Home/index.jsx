import { useParams } from "react-router-dom";
import "../../styles/main.scss";
import { Navbar } from "../../components/Navbar";
import { Sidebar } from "../../components/Sidebar";
import { FetchRoutes } from "../../services/fetchRoutes";
import DailyActivity from "../../components/DailyActivity";
import AverageSessions from "../../components/AverageSessions";
import Performance from "../../components/Performance";
import Objective from "../../components/Objective";

export default function App() {
  const { userId } = useParams();
  const { userData, activityData, avgSessionsData, performanceData } =
    FetchRoutes(userId);

  // Vérifie si les données sont bien chargées
  if (!userData || !activityData || !avgSessionsData || !performanceData) {
    return <div>Loading...</div>;
  }

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
          </div>
        </section>
      </main>
    </div>
  );
}
