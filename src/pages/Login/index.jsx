import { useNavigate } from "react-router-dom";
import { apiUrl } from "../../services/apiUrl";
import { useState } from "react";
import "../../styles/main.scss";

export function Login() {
  const navigate = useNavigate();
  const [userId, setId] = useState("");
  const [error, setError] = useState(false);
  const userUrl = `${apiUrl}/user/${userId}`;

  const handleChange = (event) => {
    setId(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(userUrl)
      .then((response) => {
        if (response.ok) {
          const path = "/user/" + userId;
          navigate(path);
        } else {
          setError(true);
        }
      })
      .catch((error) => {
        console.error(error);
      });
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
