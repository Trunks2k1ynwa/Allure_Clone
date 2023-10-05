import { useRoutes } from 'react-router-dom'
import MainLayout from '@/layout/MainLayout'
import { listRoute } from './RouteSystem'

type RouteList = {
  title: string
  to: string
  element?: React.ReactNode
}
const Routes = () => {
  let routeList: RouteList[] = []
  listRoute.forEach((route) => {
    routeList = [...routeList, ...route.routes]
  })
  const elementRoutes = useRoutes(
    routeList.map((route) => {
      return {
        path: route.to,
        element: route.element
      }
    })
  )
  return <MainLayout>{elementRoutes}</MainLayout>
}
export default Routes
