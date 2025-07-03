import MainLayout from "../layout/MainLayout";
import CapitalSquarePage from "../page/Home/Home";
import PageNotFound from "../page/not-found/PageNotFound";

export const homeRoutes = [
    {
        path: '/',
        element: <MainLayout />,
        children: [{ index: true, element: <CapitalSquarePage/> }],
    },
    {
        path: '*',
        element: <PageNotFound />,
    },
]


