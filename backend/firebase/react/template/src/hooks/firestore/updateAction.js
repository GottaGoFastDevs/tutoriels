import { useHistory } from "react-router-dom"
import { useSetCurrentSnackbar, useDocData } from ".."

function useUpdateAction({ documentRef, redirectTo, successMessage }) {
  const history = useHistory()
  const setCurrentSnackbar = useSetCurrentSnackbar()
  const document = useDocData(documentRef)
  delete document["id"]

  const action = async (data) => {
    try {
      await documentRef.set(data, { merge: true })
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
    }
  }

  return [document, action]
}

export default useUpdateAction
