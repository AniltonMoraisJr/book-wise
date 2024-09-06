import { styled } from '@/stitches.config'

export const HomeContainer = styled('div', {
  maxWidth: '100vw',
  padding: '1.25rem',
  display: 'grid',
  gridTemplateColumns: 'auto 1fr',
  //   background: 'red',

  '.image-container': {
    display: 'block',
    position: 'relative',
    width: 598,
    height: 'calc(100vh - 40px)',
  },
  '.form-container': {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

    h1: {
      fontSize: '$lg',
      color: '$gray100',
    },

    '.text-container': {
      width: '372px',
    },

    '.button-container': {
      marginTop: '$10',
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
    },
  },
})

export const ButtonAuthProvider = styled('button', {
  width: 372,
  maxWidth: 372,
  background: '$gray600',
  padding: '20px 24px',

  border: 0,
  borderRadius: '8px',

  display: 'flex',
  alignItems: 'center',
  gap: '1.25rem',

  fontSize: '$lg',
  color: '$gray200',

  cursor: 'pointer',

  transition: 'all .2s ease-in',

  '&:hover': {
    background: '$gray500',
  },
})
