import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import Loading from "../pages/Loading";

// Router(Controller 대상이 되는 페이지를 가져와야 한다.)
const MainPage = lazy(() => import("../pages/MainPage"));
const AboutPage = lazy(() => import("../pages/AboutPage"));
const LoginPage = lazy(() => import("../pages/LoginPage"));
const ListPage = lazy(() => import("../pages/todo/ListPage"));
const ReadPage = lazy(() => import("../pages/todo/ReadPage"));
const AddPage = lazy(() => import("../pages/todo/AddPage"));
const ModifyPage = lazy(() => import("../pages/todo/ModifyPage"));

const Root = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Loading />}>
        <MainPage />
      </Suspense>
    ),
  },
  {
    path: "/about",
    element: (
      <Suspense fallback={<Loading />}>
        <AboutPage />
      </Suspense>
    ),
  },
  {
    path: "/member/login",
    element: (
      <Suspense fallback={<Loading />}>
        <LoginPage />
      </Suspense>
    ),
  },
  {
    path: "/todo/list",
    element: (
      <Suspense fallback={<Loading />}>
        <ListPage />
      </Suspense>
    ),
  },
  {
    path: "/todo/read/:tno",
    element: (
      <Suspense fallback={<Loading />}>
        <ReadPage />
      </Suspense>
    ),
  },
  {
    path: "/todo/add",
    element: (
      <Suspense fallback={<Loading />}>
        <AddPage />
      </Suspense>
    ),
  },
  {
    path: "/todo/modify/:tno",
    element: (
      <Suspense fallback={<Loading />}>
        <ModifyPage />
      </Suspense>
    ),
  },
]);
export default Root;
