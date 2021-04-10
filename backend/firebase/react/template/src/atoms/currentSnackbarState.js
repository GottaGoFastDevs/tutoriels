import { atom } from "recoil"

const currentSnackbarState = atom({
  key: "currentSnackbarState",
  default: null,
})

export default currentSnackbarState
