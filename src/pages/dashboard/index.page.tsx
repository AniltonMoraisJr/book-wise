import { Text } from '@/components/Text'
import { NextPageWithLayout } from '../_app.page'
import { DashboardLayout } from '@/components/dashboardLayout'
import { ReactElement } from 'react'

const Dashboard: NextPageWithLayout = () => {
  return <Text as={'h1'}>Inicio</Text>
}

Dashboard.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>
}

export default Dashboard
