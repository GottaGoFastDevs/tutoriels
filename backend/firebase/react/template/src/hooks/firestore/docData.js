import { useFirestoreDocData } from "reactfire"

function useDocData(ref) {
  return useFirestoreDocData(ref, {
    idField: "id",
  }).data
}

export default useDocData
