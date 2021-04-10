import { useHistory } from "react-router-dom"
import { useSetCurrentSnackbar } from ".."

function useCreateAction({ collectionRef, redirectTo, successMessage }) {
  const history = useHistory()
  const setCurrentSnackbar = useSetCurrentSnackbar()

  return async (data) => {
    try {
      await collectionRef.add(data)
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

export default useCreateAction
