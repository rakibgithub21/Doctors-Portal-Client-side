/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null)

// eslint-disable-next-line no-unused-vars
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }


    const logout = () => {
        setLoading(true)
        return signOut(auth)

    }

    const updateUser = (name,image) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: image
        })
    }


    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log(currentUser, 'user observation ');
          setUser(currentUser)
          setLoading(false)
      })
        return () => {
            return unsubscribe()
        }
    }, [])



    const authInfo = {
        createUser,
        user,
        setUser,
        signIn,
        logout,
        updateUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;