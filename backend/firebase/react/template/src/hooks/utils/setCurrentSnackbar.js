import { useSetRecoilState } from "recoil"
import { currentSnackbarState } from "../../atoms"

function useSetCurrentSnackbar() {
  const setCurrentSnackbar = useSetRecoilState(currentSnackbarState)

  return (snackbar) => {
    setCurrentSnackbar({
      ...snackbar,
      key: new Date().getTime(),
    })
  }
}

export default useSetCurrentSnackbar
