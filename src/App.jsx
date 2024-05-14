import HomePage from './routes/homepage/homePage';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ListPage from './routes/listPage/listPage';
import Layout from './routes/layout/layout';
import SinglePage from './routes/singlepage/singlePage';
import ProfilePage from './routes/profilePage/ProfilePage';
import LoginPage from './routes/login/LoginPage';
import RegisterPage from './routes/register/RegisterPage';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/list",
        element: <ListPage />,
      },
      {
        path: "/:id",
        element: <SinglePage />,
      },
      {
        path: "/profile",
        element: <ProfilePage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      }
    ]
  }

]);

function App() {
  return (
      <RouterProvider router={router} />
  );
}

export default App;
