import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  const signInUsingGoogle = () => {
    setIsLoading(true);

    return signInWithPopup(auth, googleProvider)
    .finally(() =>
    setIsLoading(false)
    );
  }


  // observe user state change
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
        console.log(user);
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribed;
  }, []);

  //   Log Out
  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
    .then(() => {
        setUser({});
      })
      .finally(() => setIsLoading(false));
      // .catch((error) => {
      //   // An error happened.
        
      // });
  };

  return {
    user,
    isLoading,
    setUser,
    signInUsingGoogle,
    logOut,
  };
};

export default useFirebase;
