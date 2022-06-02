import React, { createContext, useContext, useState } from "react";

const LoginContext = createContext();

const LoginProvider = ({ children }) => {
  const [isFinishSplash, setisFinishSplash] = useState(false);
  const [Email_, setEmail_] = useState(false);
  const [isLogIn, setIsLogIn] = useState(false);
  const [token, setToken] = useState(false);
  const [profile, setProfile] = useState({});
  const [lenguage, setLenguage] = useState(0); //0 Español 1 Portugues 2 ingles
  return (
    <LoginContext.Provider
      value={{
        isFinishSplash,
        setisFinishSplash,
        profile,
        setProfile,
        Email_,
        setEmail_,
        isLogIn,
        setIsLogIn,
        lenguage,
        setLenguage,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};

export const useLogin = () => useContext(LoginContext);

export default LoginProvider;
