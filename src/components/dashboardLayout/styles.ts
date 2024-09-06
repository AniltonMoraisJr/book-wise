import { styled } from '@/stitches.config'

export const DashboardLayoutContainer = styled('div', {
  maxWidth: '100vw',
  padding: '1.25rem 1.25rem 1rem',
  display: 'grid',
  gridTemplateColumns: '232px 1fr',
})

export const DashboardSidebar = styled('aside', {
  height: 'calc(100vh - 40px)',
  padding: '40px 52px 20px',

  display: 'flex',
  flexDirection: 'column',

  borderRadius: '12px',

  backgroundImage: 'url("../images/sidebar-bg.png")' /* The image used */,
  backgroundColor: '$gray800' /* Used if the image is unavailable */,
  backgroundPosition: 'center' /* Center the image */,
  backgroundRepeat: 'no-repeat' /* Do not repeat the image */,
  backgroundSize:
    'cover' /* Resize the background image to cover the entire container */,

  nav: {
    marginTop: '64px',
  },

  footer: {
    marginTop: 'auto',
  },
})

export const DashboardMain = styled('main', {})
