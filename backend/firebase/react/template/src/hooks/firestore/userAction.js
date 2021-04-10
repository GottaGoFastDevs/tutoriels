import { useAuth } from "reactfire"
import { useHistory } from "react-router-dom"
import { useSetCurrentSnackbar } from ".."

function useUserAction({ category, action, message, to }) {
  const auth = useAuth()
  const history = useHistory()
  const setCurrentSnackbar = useSetCurrentSnackbar()

  const userAction = async (...values) => {
    try {
      let authAction = auth

      if (category) authAction = authAction[category]

      await authAction[action](...values)
      history.push(to)

      setCurrentSnackbar({
        severity: "success",
        message,
      })
    } catch (error) {
      setCurrentSnackbar({
        severity: "error",
        message: error.message,
      })
    }
  }
  return userAction
}

export default useUserAction
