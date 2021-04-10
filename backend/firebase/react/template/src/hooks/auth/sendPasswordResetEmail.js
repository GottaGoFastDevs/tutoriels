import { useUserAction } from ".."

function useSendPasswordResetEmail() {
  return useUserAction({
    action: "sendPasswordResetEmail",
    message: "Un code de confirmation vous a été envoyé.",
    to: "/auth/password-reset-email-confirmed",
  })
}

export default useSendPasswordResetEmail
