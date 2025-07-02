import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {
    HomeRoutes,
} from './routes'

const routes = [
    ...HomeRoutes,
]

const router = createBrowserRouter(routes)

export default function Router() {
    return <RouterProvider router={router} />
}
