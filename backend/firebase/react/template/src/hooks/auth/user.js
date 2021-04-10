import { useUser as useUserReactFire } from "reactfire"

function useUser() {
  return useUserReactFire().data
}

export default useUser
