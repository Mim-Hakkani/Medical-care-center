import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged,createUserWithEmailAndPassword,updateProfile,signInWithEmailAndPassword,signOut } from "firebase/auth";

import { useEffect, useState } from "react";

import initializeAuthentication from "../firebase/firebase.init";

initializeAuthentication()

const useFirebase=()=>{
    const [user,setUser]=useState({})

    const [isLoading,setIsLoding]=useState(true);

    const auth=getAuth()

    const signInUsingGoogle=()=>{
        setIsLoding(true)
        const googleProvider= new GoogleAuthProvider()

        // amichange korci
        return  signInWithPopup(auth, googleProvider)
          .then(result=>{
              setUser(result.user)
          })
        
            .finally(()=>setIsLoding(false))
    }

    

    const signUpuser=(email,password,name)=>{
        createUserWithEmailAndPassword(auth,email,password)
        .then((res)=>{
            setUser(res.user)
            window.location.reload()
            updateProfile(auth.currentUser,{
                displayName:name
            })
        })
        .finally(()=>setIsLoding(false))
    }

    const signInUser=(email,password)=>{
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                    setUser(result.user)
                    window.location.reload()
            })
            .finally(()=>setIsLoding(false))
    }

    useEffect(()=>{
        const unsubscribe= onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user)
            } else {
              setUser({})
            }
            setIsLoding(false)
          });

          return ()=> unsubscribe
          
    },[auth])

    const logOut=()=>{
        signOut(auth)
        .then(() => {
            
          }).catch((error) => {
            
          });
    }


    return {
        signInUsingGoogle,
        user,
        isLoading,
        signUpuser,
        signInUser,
        logOut
    }
}

export default useFirebase;