import { useFunction } from ".."

function useUpdateEmail() {

  const updateEmailFunction = useFunction({
    functionName: "updateEmail",
    successMessage: "L'email a bien été changé",
    redirectTo: null
  })

  return updateEmailFunction
}

export default useUpdateEmail
