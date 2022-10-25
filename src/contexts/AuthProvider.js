import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import React, { createContext, useState } from "react";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});

  const registerAccount = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const userInfo = { user, registerAccount };

  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
