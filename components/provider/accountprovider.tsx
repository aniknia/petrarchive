/**
 * Account Provider
 * This handles all of the api calls and the state of user authentication.
 */

// TODO: review response.ok gives expected out puts and pass errors along
// TODO: check if try catch are needed

import { createContext, useState, useEffect } from "react";
import { hasCookie, getCookie, setCookie, deleteCookie } from 'cookies-next';

type User = {
  id: string;
  username: string;
  email: string;
  jwt: string;
}

export const AccountContext = createContext({
  user: {} as User,
  register: (username: string, email: string, password: string) => { },
  login: (identifier: string, password: string) => { },
  logout: () => { },
  updatePassword: (currentPassword: string, newPassword: string, confirmNewPassword: string) => { },
  forgotPassword: (email: string) => { },
  resetPassword: (code: string, password: string, confirmPassword: string) => { },
  authorized: {} as boolean,
});

export default function AccountProvider(props) {
  const [authorized, setAuthorized] = useState(false);
  const [currentUser, setCurrentUser] = useState({} as User);

  async function constructor() {
    if (hasCookie('user')) {
      let tempUser = JSON.parse(await getCookie('user'));
      setCurrentUser(tempUser);
      setAuthorized(true);
    }
  }

  async function register(username: string, email: string, password: string) {
    if (authorized) {
      return "You're already logged in";
    } else {
      try {
        const response = await fetch(
          process.env.API_HOST + "/api/auth/local/register",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              username: username,
              email: email,
              password: password,
            }),
          }
        );
        if (response.ok) {
          const data = await response.json();
          let user = {
            id: data.user.id,
            username: data.user.username,
            email: data.user.email,
            jwt: data.jwt,
          }
          setAuthorized(true);
          setCurrentUser(user);
          setCookie('user', user);
          return true;
        }
        else {
          const data = await response.json();
          if (data.error.name === "ValidationError") {
            return data.error.message
          }
        }
      } catch (error) {
        console.log(error);
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
          let user = {
            id: data.user.id,
            username: data.user.username,
            email: data.user.email,
            jwt: data.jwt,
          }
          setAuthorized(true);
          setCurrentUser(user);
          setCookie('user', user);
          return true;
        }
        else {
          const data = await response.json();
          if (data.error.name === "ValidationError") {
            return data.error.message
          }
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
    deleteCookie('user')
  }

  async function udpatePassword(currentPassword: string, newPassword: string, confirmNewPassword: string) {
    if (authorized) {
      try {
        const response = await fetch(process.env.API_HOST + "/api/auth/change-password", {
          method: "POST",
          headers: {
            "Authorization": "Bearer " + currentUser.jwt,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            currentPassword: currentPassword,
            password: newPassword,
            passwordConfirmation: confirmNewPassword,
          }),
        });
        if (response.ok) {
          return "success"
        }
        else {
          const data = await response.json()
          if (data.error.name === "ValidationError") {
            return data.error.message
          }
        }
      }
      catch (error) {
        console.log(error)
        return "error"
      }
    }
  }

  async function forgotPassword(email: string) {
    if (!authorized) {
      const response = await fetch(process.env.API_HOST + "/api/auth/forgot-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
        }),
      });
      if (response.ok) {
        return "success"
      }
      else {
        const data = await response.json();
        if (data.error.name === "ValidationError") {
          return data.error.message
        }
      }
    }
    return "error"
  }

  async function resetPassword(code: string, password: string, confirmPassword: string) {
    if (!authorized) {
      const response = await fetch(process.env.API_HOST + "/api/auth/reset-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          code: code,
          password: password,
          passwordConfirmation: confirmPassword,
        }),
      });
      if (response.ok) {
        const data = await response.json();
        let user = {
          id: data.user.id,
          username: data.user.username,
          email: data.user.email,
          jwt: data.jwt,
        }
        setAuthorized(true);
        setCurrentUser(user);
        setCookie('user', user);
        return "success";
      }
      else {
        const data = await response.json();
        if (data.error.name === "ValidationError") {
          return data.error.message
        }
      }
    }
  }

  useEffect(() => {
    constructor();
  }, [])

  return (
    <AccountContext.Provider
      value={{
        user: currentUser,
        register: register,
        login: login,
        logout: logout,
        updatePassword: udpatePassword,
        forgotPassword: forgotPassword,
        resetPassword: resetPassword,
        authorized: authorized,
      }}
    >
      {props.children}
    </AccountContext.Provider>
  );
}
