;
import "../styles/SignIn.css"; // Fichier CSS pour styliser la page de connexion

function SignIn() {
  return (
    <>
    <div className="signin-page">
      <form className="signin-form">
        <h1 className="signin-title">Sign In</h1>

        <div className="input-wrapper">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" />
        </div>

        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" />
        </div>

        <div className="input-remember">
          <input type="checkbox" id="remember-me" />
          <label htmlFor="remember-me">Remember me</label>
        </div>

        <button type="submit" className="signin-button">Sign In</button>
      </form>
    </div>
    </>
  );
}

export default SignIn;
