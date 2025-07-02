import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {
    homeRoutes,
} from './routes'

const routes = [
    ...homeRoutes,
]

const router = createBrowserRouter(routes)

export default function Router() {
    return <RouterProvider router={router} />
}
