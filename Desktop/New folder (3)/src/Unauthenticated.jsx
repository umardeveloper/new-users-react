import React from "react";
import useToken from "./Hooks/useToken";
import "./App.scss";
function UnauthenticatedApp() {
  const [setToken] = useToken(true);

  const handleSubmit = (evt) => {
    evt.preventDefault();

    const { username, password } = evt.target.elements;

    fetch(process.env.REACT_APP_API_URL + "/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username.value.trim(),
        password: password.value.trim(),
      }),
    })
      .then((response) => response.json())
      .then((data) => setToken(data.token));
  };

  return (
    <>
      <div className="loginpage">
        <form onSubmit={handleSubmit}>
          <h1 className="loginpage-heading">Login</h1>

          <div>
            <input
              className="loginpage-input"
              type="text"
              defaultValue="eve.holt@reqres.in"
              placeholder="username"
              name="username"
            />
          </div>

          <div>
            <input
              className="loginpage-input"
              type="text"
              defaultValue="cityslicka"
              placeholder="password"
              name="password"
            />
          </div>

          <button className="loginpage-btn" type="submit">
            Log In
          </button>
        </form>
      </div>
    </>
  );
}

export default UnauthenticatedApp;
