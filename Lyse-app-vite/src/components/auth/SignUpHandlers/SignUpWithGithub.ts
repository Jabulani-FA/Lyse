import { getAuth, signInWithPopup, GithubAuthProvider } from "firebase/auth";
import { app } from "../../functions/firebase/auth";
const provider = new GithubAuthProvider();
import store from "../../reducers/index";

export const handleSignUpWithGithub = () => {
  const auth = getAuth(app);
  const setUser = store((state) => state.setUser);
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a GitHub Access Token. You can use it to access the GitHub API.
      const credential = GithubAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;

      // The signed-in user info.
      const user = result.user;
      if (user !== null) {
        setUser({
          id: user.uid,
          name: user.displayName,
          email: user.email!,
          token: token!,
        });
      }

      // IdP data available using getAdditionalUserInfo(result)

      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GithubAuthProvider.credentialFromError(error);
      // ...
      console.error(
        "Error during GitHub login:",
        errorCode,
        errorMessage,
        email,
        credential
      );
    });
};
