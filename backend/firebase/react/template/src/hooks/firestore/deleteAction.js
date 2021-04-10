import { useSetCurrentSnackbar } from ".."

function useDeleteAction({ documentRef, successMessage }) {
  const setCurrentSnackbar = useSetCurrentSnackbar()

  return async (data) => {
    try {
      await documentRef.delete()
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
}

export default useDeleteAction
