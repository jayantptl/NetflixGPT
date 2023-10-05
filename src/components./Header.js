import React, { useContext, useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/Context";
import { onAuthStateChanged } from "firebase/auth";
import { LOGO } from "../utils/constansts";

const Header = () => {
  const nevigate = useNavigate();
  const { updateUser } = useContext(UserContext);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        updateUser({ uid, email, displayName });
        nevigate("/browse");
      } else {
        updateUser(null);
        nevigate("/");
      }
    });

    return () => unsubscribe(); // when component unmount then do remove eventlistener
  }, []);
  const { user } = useContext(UserContext);
  const handleClick = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        nevigate("/error");
      });
  };
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img src={LOGO} alt="logo" className="w-44" />
      <div className="flex p-2">
        {user && (
          <button onClick={handleClick} className="font-bold text-white">
            Sign Out
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
