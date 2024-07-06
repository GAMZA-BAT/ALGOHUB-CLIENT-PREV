import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import HomePage from '@/pages/homePage/HomePage';

import App from '@/App';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      // {
      //   path: 'keyword/:reservationId',
      //   element: <KeywordPage />,
      // },
      // {
      //   path: 'review/:reservationId',
      //   element: <ReviewPage />,
      // },
      // {
      //   path: 'done/:reservationId',
      //   element: <DonePage />,
      // },
    ],
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
