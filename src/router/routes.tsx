import { lazy } from 'react';
const Index = lazy(() => import('../pages/Index'));
const SignUp = lazy(() => import('../pages/SignUp'));
const Dashboard = lazy(() => import('../pages/Dashboard'));
const Faq = lazy(() => import('../pages/Faq'));
const Error = lazy(() => import('../components/Error'));
const routes = [
    // login
    {
        path: '/',
        element: <Index />,
        layout: 'blank'
        // layout: 'default',
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
        path: '*',
        element: <Error />,
        layout: 'blank'
    }

];

export { routes };
