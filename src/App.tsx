import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Suspense } from "react";
import MainLayout from "./Components/Layout/MainLayout";
import LandingPage from "./Pages/LandingPage/LandingPage";
import "./index.css";
import AboutPage from "./Pages/AboutPage/AboutPage";
import BlogsPage from "./Pages/BlogsPage/BlogsPage";
import BlogDetailPage from "./Pages/BlogsPage/BlogDetailPage";
import LoadingSpinner from "./Components/Layout/LoadingSpinner";
import BucketListPage from "./Pages/BucketListPage/BucketListPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/blogs",
        element: <BlogsPage />,
      },
      {
        path: "/blogs/:id",
        element: <BlogDetailPage />,
      },
      {
        path: "/bucket-list",
        element: <BucketListPage />,
      },
    ],
  },
]);

const App = () => {
  return (
    <div className="bg-black min-h-screen">
      <Suspense fallback={<LoadingSpinner />}>
        <RouterProvider router={router} />
      </Suspense>
    </div>
  );
};

export default App;
