




export const homeRoutes = [
    {
        path: '/',
        element: <MainLayout />,
        children: [{ index: true, element: <Home /> }],
    },
    {
        path: '*',
        element: <PageNotFound />,
    },
]


