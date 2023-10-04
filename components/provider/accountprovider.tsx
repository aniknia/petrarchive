import { createContext, useState } from "react";

type User = {
  id: string;
  username: string;
  jwt: string;
}

export const AccountContext = createContext({
  user: {} as User,
  register: (username: string, email: string, password: string) => { },
  login: (identifier: string, password: string) => { },
  logout: () => { },
  authorized: {} as boolean,
});

export default function AccountProvider(props) {
  const [authorized, setAuthorized] = useState(false);
  const [currentUser, setCurrentUser] = useState({} as User);

  async function register(username: string, email: string, password: string) {
    if (authorized) {
      return "You're already logged in";
    } else {
      try {
        const response = await fetch(
          process.env.API_HOST + "/api/auth/local/register",
          {
            method: "POST",
            body: JSON.stringify({
              username: username,
              email: email,
              password: password,
            }),
          }
        );
        if (response.ok) {
          const data = await response.json();
          setAuthorized(true);
          setCurrentUser({
            id: data.user.id,
            username: data.user.username,
            jwt: data.jwt,
          });
          return "true";
        }
        else { return Promise.reject(response) }
      } catch (error) {
        console.log(error);
        console.log("error")
        return false
      }
    }
  }

  async function login(identifier: string, password: string) {
    if (authorized) {
      return "You're already logged in";
    } else {
      try {
        const response = await fetch(process.env.API_HOST + "/api/auth/local", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            identifier: identifier,
            password: password,
          }),
        });
        if (response.ok) {
          const data = await response.json();
          setAuthorized(true);
          setCurrentUser({
            id: data.user.id,
            username: data.user.username,
            jwt: data.jwt,
          });
          return true;
        }
        else {
          return false
        }
      } catch (error) {
        console.log(error);
        return false
      }
    }
  }

  function logout() {
    setAuthorized(false);
    setCurrentUser(null);
  }

  return (
    <AccountContext.Provider
      value={{
        user: currentUser,
        register: register,
        login: login,
        logout: logout,
        authorized: authorized,
      }}
    >
      {props.children}
    </AccountContext.Provider>
  );
}
