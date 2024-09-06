import { DashboardLayout } from '@/components/dashboardLayout'
import { Text } from '@/components/Text'
import { NextPageWithLayout } from '@/pages/_app.page'
import { ReactElement } from 'react'

// import { Container } from './styles';

const Explorer: NextPageWithLayout = () => {
  return <Text as={'h1'}>Explorar</Text>
}

Explorer.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>
}

export default Explorer
