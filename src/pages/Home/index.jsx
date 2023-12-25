import { useParams } from "react-router-dom";
import "../../styles/main.scss";

function App() {
  const { userId } = useParams();

  return (
    <div>
      <h1 className="title">Home</h1>
      <p>Bonjour {userId}</p>
    </div>
  );
}

export default App;
