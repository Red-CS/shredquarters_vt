import { useEffect, useReducer } from "react"
import { useRouter } from "next/router"
import { useSession } from "next-auth/react"

/**
 * Returns the authentication state of the client,
 * and redirects to index if unauthenticated
 */
const useAuth = () => {
  const router = useRouter()
  const { status } = useSession()
  const [isAuthenticated, dispatch] = useReducer(reducer, false)

  useEffect(() => {
    switch (status) {
      case "authenticated":
        dispatch({ type: "authenticated" })
        return
      case "unauthenticated":
        router.push("/auth/signIn")
        dispatch({ type: "unauthenticated" })
        return
      case "loading":
        dispatch({ type: "loading" })
        return
    }
  }, [status, router])

  return isAuthenticated
}

type State = boolean
type Action = { type: "authenticated" | "unauthenticated" | "loading" }

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "authenticated":
      return true
    case "unauthenticated":
      return false
    // case "loading":
    //   return null
  }
  return false
}

export { useAuth }