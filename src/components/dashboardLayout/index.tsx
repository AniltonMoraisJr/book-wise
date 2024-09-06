import { signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import React from 'react'

import {
  DashboardLayoutContainer,
  DashboardMain,
  DashboardSidebar,
} from './styles'

type DashboardLayoutPros = {
  children: React.ReactNode
}

export const DashboardLayout: React.FC<DashboardLayoutPros> = ({
  children,
}) => {
  const session = useSession()
  const handleLogout = async () => {
    await signOut()
  }

  console.log(session.data?.user)

  return (
    <DashboardLayoutContainer>
      <DashboardSidebar>
        <Image
          src={'/images/logo.png'}
          alt="BookWise"
          width={128}
          height={32}
        />
        <nav>
          <ul>
            <li>Início</li>
            <li>Explorar</li>
            <li>Perfil</li>
          </ul>
        </nav>
        <footer>
          <span>
            {session.data?.user.name}
            <img
              alt="logo"
              src={session.data?.user.avatar_url}
              width={50}
              height={50}
            />
          </span>
          <button onClick={handleLogout}>Logout</button>
        </footer>
      </DashboardSidebar>
      <DashboardMain>{children}</DashboardMain>
    </DashboardLayoutContainer>
  )
}
