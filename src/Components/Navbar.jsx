import React, { useContext } from "react";
import styled from "styled-components";
import { ContextTheme } from "../Context/ThemeContextProvider";
const Div = styled.div`
  background-color: black;
  height: 150px;
  display: flex;
  justify-content: space-between;
  width: 100;
`;

const Button = styled.button`
  /* display: block; */
  height: 40px;
  /* float: left; */
  /* text-align: right; */
  /* position: absolute; */

  margin: 1rem;
`;

export function Navbar() {
  const { isAuth, setAuth, data, onLogin, onLogout } = useContext(ContextTheme);

  console.log(data);
  return (
    <Div>
      <Button onClick={isAuth ? () => onLogout() : () => onLogin()}>
        {isAuth ? "Logout" : "Login"}
      </Button>
      <div style={{ color: "white" }}>
        {isAuth ? (
          <h3>
            <span>user logged in: </span>
            {data.token}
          </h3>
        ) : (
          <h3>user has logged out</h3>
        )}
      </div>
    </Div>
  );
}
