




// Student routes, chỉ cho role STUDENT
export const HomeRoutes = [
    {
        path: '/courses',
        element: (
            <ProtectedRoute
                element={<MainLayout />}
                allowedRoles={['student']}
            />
        ),
        children: [
            {
                index: true,
                element: <StudentCourse />,
            },
        ],
    },
    {
        path: '/courses/:courseId',
        element: (
            <ProtectedRoute
                element={<CourseDetail />}
                allowedRoles={['student']}
            />
        ),
    },
]

// Profile routes, mọi user đã đăng nhập đều có thể truy cập, bạn có thể mở rộng kiểm soát roles nếu cần
export const profileRoutes = [
    {
        path: '/profile',
        element: (
            <ProtectedRoute
                element={<ProfieLayout />}
                allowedRoles={['admin', 'teacher', 'student']}
            />
        ),
        children: [
            {
                index: true,
                element: <ProfileUser />,
            },
        ],
    },
]
