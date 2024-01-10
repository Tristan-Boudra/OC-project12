import "../../styles/main.scss";

/**
 * Composant qui représente une page d'erreur 404.
 * @component
 * @returns {JSX.Element} - Élément JSX représentant la page d'erreur.
 */

function Error() {
  return (
    <div className="errorContainer">
      <h1 className="error">404</h1>
      <p className="errorText">Oups! La page que vous demandez n'existe pas.</p>
      <a href="/" className="errorLink">
        Retourner sur la page d’accueil
      </a>
    </div>
  );
}

export default Error;
