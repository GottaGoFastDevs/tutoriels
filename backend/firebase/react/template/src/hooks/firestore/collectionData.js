import { useFirestoreCollectionData } from "reactfire"

function useCollectionData(ref) {
  return useFirestoreCollectionData(ref, {
    idField: "id",
  }).data
}

export default useCollectionData
