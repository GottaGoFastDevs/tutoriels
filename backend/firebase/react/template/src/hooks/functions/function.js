import { useHistory } from "react-router-dom"
import { useSetCurrentSnackbar } from ".."
import { useFunctions } from "reactfire"

function useFunction({ functionName, redirectTo, successMessage }) {
  const history = useHistory()
  const setCurrentSnackbar = useSetCurrentSnackbar()
  const functions = useFunctions()
  const firebaseFunction = functions.httpsCallable(functionName)

  return async (data) => {
    try {
      await firebaseFunction(data)
      history.push(redirectTo)
      setCurrentSnackbar({
        severity: "success",
        message: successMessage,
      })
    } catch (error) {
      setCurrentSnackbar({
        severity: "error",
        message: "Une erreur est survenue, veuillez réessayer.",
      })
      throw new Error("")
    }
  }
}

export default useFunction
