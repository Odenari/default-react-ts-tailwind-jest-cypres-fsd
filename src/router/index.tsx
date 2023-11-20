import { App } from '../app/app';
import { Login, Registration } from '../pages';

export const routes = [
  {
    path: '/',
    element: <App />,
    errorElement: <div>Error</div>,
    children: [
      {
        path: '/login',
        element: <Login />,
      },

      {
        path: '/registration',
        element: <Registration />,
      },
    ],
  },
];
