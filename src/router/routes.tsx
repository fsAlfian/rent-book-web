import { lazy } from 'react';
const Index = lazy(() => import('../pages/Index'));
const SignUp = lazy(() => import('../pages/SignUp'));
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
    }

];

export { routes };
