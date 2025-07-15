import { oauthSignUpHandler } from "./SignUpHandler";
import { FacebookAuthProvider, AuthCredential } from "firebase/auth";
import type{  UserCredential } from "firebase/auth";

// export const facebookSignUpHandler = () => {
//   const provider = new FacebookAuthProvider();
//   oauthSignUpHandler({
//     providerInstance: provider,
//     getCredentialFromResult: FacebookAuthProvider.credentialFromResult,
//     getCredentialFromError: FacebookAuthProvider.credentialFromError,
//     providerName: "Facebook",
//   });
// };

export const facebookSignUpHandler = () => {
  const provider = new FacebookAuthProvider();

  oauthSignUpHandler({
    providerInstance: provider,
    getCredentialFromResult: (result: UserCredential): AuthCredential | null => {
      return FacebookAuthProvider.credentialFromResult(result);
    },
    getCredentialFromError: (error: unknown): AuthCredential | null => {
      // Type guard to ensure error is a FirebaseError
      if (typeof error === "object" && error !== null && "code" in error) {
        return FacebookAuthProvider.credentialFromError(error as any); // You can replace `any` with `FirebaseError` if imported
      }
      return null;
    },
    providerName: "Facebook",
  });
};

