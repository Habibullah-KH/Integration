import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import PropTypes from 'prop-types'
import { createContext, useEffect, useState } from "react";
import { auth } from '../firebase.init';

export const AuthContext = createContext(null);

const GoogleProvider = new GoogleAuthProvider();

const Authprovide = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    //* Create user [signup]

    const createUser = (email, password) => {

        return createUserWithEmailAndPassword(auth, email, password);
    }

    //* login or signin user

    const logIn =  (email, password) => {

        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    //* sign in with google

    const signInWithGoogle = () => {

        return signInWithPopup(auth, GoogleProvider)
    }
    
    
    //* Set obsurver
    
    useEffect(() => {
        
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            
            setLoading(true)
            console.log("current user",currentUser);
            setUser(currentUser);
            setLoading(false);
    
            // if(currentUser){
            //     console.log('Current user', currentUser);
            // }
            // else{
            //     console.log('noUser login');
            // }
        })

        return () => {unSubscribe()}

    },[])


    //* set signout

    const setSignout = () => {
        return signOut(auth)
    }

    const authInfo = {
        loading,
        user,
        createUser,
        logIn,
        setSignout,
        signInWithGoogle
    }


    return (
        <>
            <AuthContext.Provider value={authInfo}>
{children}
            </AuthContext.Provider>
        </>
    );
};

Authprovide.propTypes = {
    children: PropTypes.node,
};
export default Authprovide;