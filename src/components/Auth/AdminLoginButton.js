import React from "react";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../../firebase/firebaseConfig";
import { useNavigate } from "react-router-dom";

const AdminLoginButton = () => {
  const navigate = useNavigate();

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // Perform additional actions if needed

      console.log("Google sign-in successful:", user);

      // Redirect to the leaderboard page
      navigate("/leaderboard");
    } catch (error) {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData?.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);

      console.error(
        "Error signing in with Google:",
        errorCode,
        errorMessage,
        email,
        credential
      );
    }
  };

  return (
    <button
      onClick={signInWithGoogle}
      className="w-[9vw] h-[4vw] border-4 border-t-red-500 border-r-[#2dff34de] border-b-[#ffea31e7] border-l-blue-500 text-black text-[1.2vw] font-poppins font-semibold rounded-lg transition hover:bg-white"
    >
      ENTER
    </button>
  );
};

export default AdminLoginButton;
