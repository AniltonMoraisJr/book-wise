'use client'
import { signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

// import { Container } from './styles';

const Dashboard: React.FC = () => {
  const session = useSession()
  const router = useRouter()

  const handleLogout = async () => {
    await signOut()
  }

  useEffect(() => {
    const isSignIn = session.status === 'authenticated'

    if (!isSignIn) {
      router.push('/')
    }
  }, [router, session])
  return (
    <>
      <h2>Dashboard</h2>
      <button onClick={handleLogout}>Logout</button>
    </>
  )
}

export default Dashboard
