import { useFirestore } from "reactfire"
import { useCollectionData } from "../.."

function useMovies() {
  const firestore = useFirestore()

  const moviesRef = firestore
    .collection("movies")

  const movies = useCollectionData(moviesRef)

  return movies
}

export default useMovies