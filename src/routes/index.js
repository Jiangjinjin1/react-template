import Home from '../pages/Home/Home'
import LookDemo from '../pages/LookDemo/LookDemo'

const routesConfig = [
  {
    path: '/home',
    component: Home
  },
  {
    path: '/lookDemo',
    component: LookDemo
  },
  {
    path: '/',
    component: Home,
  },
]

export default routesConfig