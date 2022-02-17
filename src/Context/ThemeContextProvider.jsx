import React, { createContext } from "react";

export const ContextTheme = createContext();

export const ThemeContextProvider = ({ children }) => {
  const [isAuth, setAuth] = React.useState(false);
  const [data, setData] = React.useState([]);
  const onLogout = () => {
    setAuth(false);
    setData([]);
  };
  const onLogin = () => {
    fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: "eve.holt@reqres.in",
        password: "cityslicka"
      })
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.token) {
          setAuth(true);
          setData(res);
        }
      });
  };
  return (
    <ContextTheme.Provider value={{ isAuth, setAuth, onLogout, onLogin, data }}>
      {children}
    </ContextTheme.Provider>
  );
};
