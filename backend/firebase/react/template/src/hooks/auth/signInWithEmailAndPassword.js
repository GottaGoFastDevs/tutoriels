import { useUserAction } from ".."

function useSignInWithEmailAndPassword() {
  return useUserAction({
    action: "signInWithEmailAndPassword",
    message: "Vous êtes bien connecté.",
    to: "/",
  })
}

export default useSignInWithEmailAndPassword
