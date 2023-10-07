import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { createContext, useState } from "react";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider()
const AuthProviders = ({children}) => {

const [user ,setUser] = useState(null)

// create user
const createNewUser = (email,password) =>{
  return createUserWithEmailAndPassword(auth,email,password)
}

// user SigIn
const loginUser = (email,password) =>{
  
return signInWithEmailAndPassword(auth,email,password)
}

// Google Login
const googleLogin = () =>{
 return signInWithPopup(auth,googleProvider)
}



const authInfo = {
 user,
 createNewUser,
 loginUser,
 googleLogin 
}

return (
<AuthContext.Provider value={authInfo}>
     {children}                                  
</AuthContext.Provider>
);                      
};

export default AuthProviders;