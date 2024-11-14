import { lazy } from 'react';
const Index = lazy(() => import('../pages/Index'));
const SignUp = lazy(() => import('../pages/SignUp'));
const Dashboard = lazy(() => import('../pages/Dashboard'));
const Faq = lazy(() => import('../pages/Faq'));
const Error = lazy(() => import('../components/Error'));
const Community = lazy(() => import('../pages/Community'));
const routes = [
    {
        path: '/',
        element: <Index />,
        layout: 'blank'
    },
    {
        path: '/sign-up',
        element: <SignUp />,
        layout: 'blank'
    },
    {
        path: '/dashboard',
        element: <Dashboard />,
        layout: 'default'
    },
    {
        path: '/faq',
        element: <Faq />,
        layout: 'blank'
    },
    {
        path: '/community',
        element: <Community />,
        layout: 'default'
    },
    {
        path: '*',
        element: <Error />,
        layout: 'blank'
    },
];

export { routes };
