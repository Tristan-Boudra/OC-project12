import { useParams } from "react-router-dom";
import "../../styles/main.scss";
import { Navbar } from "../../components/Navbar";
import { Sidebar } from "../../components/Sidebar";

function App() {
  const { userId } = useParams();

  return (
    <div>
      <Navbar />
      <main>
        <Sidebar />
        <section>
          <h1 className="title">Home</h1>
          <p>Bonjour {userId}</p>
        </section>
      </main>
    </div>
  );
}

export default App;
