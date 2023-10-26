/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import {  createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import auth from "../Firebase/firebase.config";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const unSubtribe = onAuthStateChanged(auth,currentUser=>{
      console.log(currentUser);
      setLoading(false)
      setUser(currentUser)
    })

    return ()=>{
      unSubtribe()
    }
    
  }, []);

const createUser =(email,password)=>{
  setLoading(true)
  return createUserWithEmailAndPassword(auth,email,password)
}

  const authInfo = {
    user,
    createUser,
    loading,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
