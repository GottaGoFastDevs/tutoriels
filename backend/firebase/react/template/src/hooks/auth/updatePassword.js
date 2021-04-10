import { useUserAction } from ".."

function useUpdatePassword() {
  return useUserAction({
    category: "currentUser",
    action: "updatePassword",
    message: "Le mot de passe a bien été changé",
  })
}

export default useUpdatePassword
