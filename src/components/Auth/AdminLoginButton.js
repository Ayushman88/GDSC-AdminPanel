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
      className="w-[120px] h-[50px] border-4 border-t-red-500 border-r-[#2dff34de] border-b-[#ffea31e7] border-l-blue-500 text-black px-2 py-2 bg-transparent rounded-t-lg rounded-r-md rounded-b-sm rounded-l-xl absolute left-[720px] top-[150px] mt-[290px] hover:bg-gray-100"
    >
      ENTER
    </button>
  );
};

export default AdminLoginButton;
