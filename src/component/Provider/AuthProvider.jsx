import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../../firebase.init';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
export const AuthContext=createContext(null)
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const googleProvider=new GoogleAuthProvider()
    const [loading,setLoading]=useState(true)


    const createUser =(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const singInuser=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    const signOutUser=()=>{
        return signOut(auth)
    }

    const googleLogin=()=>{
        return signInWithPopup(auth,googleProvider)
    }

    useEffect( ()=>{
        const unScribe=onAuthStateChanged(auth,currentUser =>{
            console.log('user login',currentUser)
            setUser(currentUser)
            setLoading(false)
            
        })
        return ()=>{
            unScribe()
        }
    },[])


    const authInfo={
        user,
        createUser,
        singInuser,
        googleLogin,
        signOutUser,
        loading

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;