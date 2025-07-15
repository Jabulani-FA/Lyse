import { getAuth, signInWithPopup } from "firebase/auth";
import { app } from "../../functions/firebase/auth";
import store from "../../reducers";
import { createUser } from "../../functions/user";

interface OAuthProviderHandlerParams {
  providerInstance: any;
  getCredentialFromResult: (result: any) => any;
  getCredentialFromError: (error: any) => any;
  providerName: string; // For error logs
}

export const oauthSignUpHandler = ({
  providerInstance,
  getCredentialFromResult,
  getCredentialFromError,
  providerName,
}: OAuthProviderHandlerParams) => {
  const auth = getAuth(app);
  const setUser = store((state) => state.setUser);
  const User = store((state) => state.user!);

  signInWithPopup(auth, providerInstance)
    .then((result) => {
      const credential = getCredentialFromResult(result);
      const token = credential?.accessToken;
      const user = result.user;

      createUser(User, token!)
        .then(() => {
          setUser({
            id: user.uid,
            name: user.displayName,
            email: user.email!,
          });
          // redirect to "ask" page
        })
        .catch((err) => {
          console.log(`Error creating user from ${providerName} login:`, err);
        });
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.customData?.email;
      const credential = getCredentialFromError(error);
      console.error(
        `Error during ${providerName} login`,
        errorCode,
        errorMessage,
        email,
        credential
      );
    });
};
