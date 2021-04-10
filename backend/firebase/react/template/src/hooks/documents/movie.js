import { useFirestore } from "reactfire"
import { useDocData } from ".."

function useMovie() {
  const firestore = useFirestore()

  const movieRef = firestore
    .collection("movies")
    .doc("prixart")

  const movie = useDocData(movieRef)

  return movie
}

export default useMovie
