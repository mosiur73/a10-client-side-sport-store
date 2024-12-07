import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../../firebase.init';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
export const AuthContext=createContext(null)
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const googleProvider=new GoogleAuthProvider()
    const [loading,setLoading]=useState(true)
    const [theme, setTheme] = useState('light');
    


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
            // console.log('user login',currentUser)
            setUser(currentUser)
            setLoading(false)
            
        })
        return ()=>{
            unScribe()
        }
    },[])

     // Check localStorage for theme preference on mount
     useEffect(() => {
        const savedTheme = localStorage.getItem('theme') || 'light';
        setTheme(savedTheme);
        document.documentElement.setAttribute('data-theme', savedTheme); 
    }, []);

      // Toggle between dark and light themes
      const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme); // Save preference to localStorage
    };



    const authInfo={
        user,
        createUser,
        singInuser,
        googleLogin,
        signOutUser,
        loading,
        toggleTheme,
        theme

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;