import { auth } from "./firebase";

import { GoogleAuthProvider,signInWithEmailAndPassword, signInWithPopup, } from "firebase/auth";



// SignIn user With Email And Password function

export const doSignInWithEmailAndPassword = async (email,password) => {
   return signInWithEmailAndPassword(auth , email, password);

};

// SignIn user With google function

export const doSignInWithGoogle = async () => {
   const provider = new GoogleAuthProvider();
   const result = await signInWithPopup(auth,provider) ;
   // result.user
   return result
};

// Signout function
export const doSignOut = () => {
   return auth.signOut();
}


