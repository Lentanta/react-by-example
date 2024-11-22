import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import App from './App.tsx'
import { routes } from './routes.tsx';

export const rootRoutes = [
  {
    path: "",
    element: <App />,
    children: routes
  },
];

const router = createBrowserRouter(rootRoutes);

const root = document.getElementById('root')!
createRoot(root!).render(<RouterProvider router={router} />)
