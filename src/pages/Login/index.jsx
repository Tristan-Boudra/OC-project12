import { useNavigate } from "react-router-dom";
import { apiUrl } from "../../services/apiUrl";
import { useMockData } from "../../services/toggleData";
import { useState } from "react";
import "../../styles/main.scss";

/**
 * Composant représentant la page de connexion.
 * @component
 * @returns {JSX.Element} - Élément JSX représentant la page de connexion.
 */

export function Login() {
  const navigate = useNavigate();
  const [userId, setId] = useState("");
  const [error, setError] = useState(false);
  const userUrl = `${apiUrl}/user/${userId}`;

  /**
   * Gère le changement de la valeur de l'ID utilisateur.
   * @param {Object} event - L'événement de changement de la valeur de l'input.
   */

  const handleChange = (event) => {
    setId(event.target.value);
  };

  /**
   * Gère la soumission du formulaire de connexion.
   * @param {Object} event - L'événement de soumission du formulaire.
   */

  const handleSubmit = (event) => {
    event.preventDefault();

    if (useMockData) {
      const path = "/user/" + userId;
      navigate(path);
    } else {
      fetch(userUrl)
        .then((response) => {
          if (response.ok) {
            const path = "/user/" + userId;
            navigate(path);
          } else {
            setError(true);
            window.location.href = "/error";
          }
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  };

  return (
    <div className="loginContainer">
      <h1 className="title">Login</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="idUser">Enter user id</label>
        <input
          type="text"
          id="idUser"
          value={userId}
          onChange={handleChange}
          name="idUser"
          required
        />
        <button type="submit">Login</button>
        {error && <p className="error">User not found</p>}
      </form>
    </div>
  );
}

export default Login;
