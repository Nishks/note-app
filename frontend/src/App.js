// import { Route } from "react-router-dom/cjs/react-router-dom.min";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import LandingPage from "./Screens/LandingPage/LandingPage";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import MyNotes from "./Screens/MyNotes/MyNotes";

const AppLayout = () => {
  return (
    <>
      <Header />
      {/* Outlet will replaced with the reqired route using nested routing */}
      <Outlet />
      <Footer />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/myNotes",
        element: <MyNotes />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={appRouter} />;
};

export default App;
