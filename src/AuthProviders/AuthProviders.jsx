import { createUserWithEmailAndPassword } from "firebase/auth";
import { createContext, useState } from "react";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null)

const AuthProviders = ({children}) => {

const [user ,setUser] = useState(null)

// create user
const createNewUser = (email,password) =>{
  return createUserWithEmailAndPassword(auth,email,password)
}


const authInfo = {
 user,
 createNewUser
}

return (
<AuthContext.Provider value={authInfo}>
     {children}                                  
</AuthContext.Provider>
);                      
};

export default AuthProviders;