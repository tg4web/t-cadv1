import { signIn, signOut, useSession, getSession } from "next-auth/react"
import { useRouter } from "next/router"

export default function Dashboard() {



  const { data: session, status } = useSession()
  const router = useRouter();

  if (status === 'authenticated') {
    return (
      <>
        <h1>Dashboard</h1>
        <button type="submit" onClick={async () => await signOut() && await router.push('/')}>
          Sign out
        </button>
      </>
    );
  } else {
    if (status === 'unauthenticated') {
      console.log('no active session was found')
      router.push('/')
      return
    }
  }
}