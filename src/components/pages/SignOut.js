import React from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase/firebaseConfig";

const SignOut = () => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        // Redirect to the home path after successful sign-out
        navigate("/");
      })
      .catch((error) => {
        console.error("Sign-out error:", error);
      });
  };

  return auth.currentUser && <button onClick={handleSignOut}>Sign Out</button>;
};

export default SignOut;
