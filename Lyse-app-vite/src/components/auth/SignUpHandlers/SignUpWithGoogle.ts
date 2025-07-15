import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../../functions/firebase/auth";
const provider = new GoogleAuthProvider();
import store from "../../reducers/index";
import { createUser } from "../../functions/user";

export const handleSignUpWithGoogle = () => {
  const auth = getAuth(app);
  const setUser = store((state) => state.setUser);
  const User = store((state) => state.user!);
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a GitHub Access Token. You can use it to access the GitHub API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;

      // The signed-in user info.
      const user = result.user;

      createUser(User, token!)
        .then(() => {
          setUser({
            id: user.uid,
            name: user.displayName,
            email: user.email!,
          });
            // on fulfil route user to ask page
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
      console.error(
        "Error during Google Login",
        errorCode,
        errorMessage,
        email,
        credential
      );
    });
};
