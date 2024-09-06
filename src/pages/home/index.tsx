import React from 'react'
import { ButtonAuthProvider, HomeContainer } from './styles'

import googleIcon from '@/components/icons/google.svg'
import gitHubIcon from '@/components/icons/gitHub.svg'
import rocketIcon from '@/components/icons/rocketLaunch.svg'

import Image from 'next/image'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'

// import { Container } from './styles';

const Home: React.FC = () => {
  const session = useSession()
  const router = useRouter()

  const isSignIn = session.status === 'authenticated'

  if (isSignIn) {
    router.push(`/dashboard`)
  }

  async function handleSignIn(provider: string) {
    await signIn(provider)
  }

  return (
    <HomeContainer>
      <div className="image-container">
        <Image
          fill
          quality={100}
          src={'/images/home.png'}
          alt="Imagem com o logo BookWise"
        />
      </div>
      <div className="form-container">
        <div className="text-container">
          <h1>Boas vindas!</h1>
          <p>Faça seu login ou acesse como visitante.</p>
        </div>
        <div className="button-container">
          <ButtonAuthProvider onClick={() => handleSignIn('google')}>
            <Image
              alt="Ícone do Google"
              src={googleIcon}
              width={32}
              height={32}
            />
            Entrar com Google
          </ButtonAuthProvider>
          <ButtonAuthProvider onClick={() => handleSignIn('github')}>
            <Image
              alt="Ícone do Google"
              src={gitHubIcon}
              width={32}
              height={32}
            />
            Entrar com GitHub
          </ButtonAuthProvider>
          <ButtonAuthProvider>
            <Image
              alt="Ícone do Google"
              src={rocketIcon}
              width={32}
              height={32}
            />
            Acessar como visitante
          </ButtonAuthProvider>
        </div>
      </div>
    </HomeContainer>
  )
}

export default Home
