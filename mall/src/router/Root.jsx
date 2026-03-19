import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import Loading from "../pages/Loading";

// Router(Controller 대상이 되는 페이지를 가져와야 한다.)
const MainPage = lazy(() => import("../pages/MainPage"));
const AboutPage = lazy(() => import("../pages/AboutPage"));

// -------------------------------Todo----------------------------------
const ListPage = lazy(() => import("../pages/todo/ListPage"));
const ReadPage = lazy(() => import("../pages/todo/ReadPage"));
const AddPage = lazy(() => import("../pages/todo/AddPage"));
const ModifyPage = lazy(() => import("../pages/todo/ModifyPage"));

// -------------------------------product----------------------------------
const ProductListPage = lazy(() => import("../pages/product/ListPage"));
const ProductAddPage = lazy(() => import("../pages/product/AddPage"));
const ProductReadPage = lazy(() => import("../pages/product/ReadPage"));
const ProductModifyPage = lazy(() => import("../pages/product/ModifyPage"));

// -------------------------------member----------------------------------
const LoginPage = lazy(() => import("../pages/member/LoginPage"));
const LogoutPage = lazy(() => import("../pages/member/LogoutPage"));

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
  // -------------------------------Todo----------------------------------
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
  // -------------------------------product----------------------------------
  {
    path: "/product/list",
    element: (
      <Suspense fallback={<Loading />}>
        <ProductListPage />
      </Suspense>
    ),
  },
  {
    path: "/product/read/:pno",
    element: (
      <Suspense fallback={<Loading />}>
        <ProductReadPage />
      </Suspense>
    ),
  },
  {
    path: "/product/add",
    element: (
      <Suspense fallback={<Loading />}>
        <ProductAddPage />
      </Suspense>
    ),
  },
  {
    path: "/product/modify/:pno",
    element: (
      <Suspense fallback={<Loading />}>
        <ProductModifyPage />
      </Suspense>
    ),
  },
  // -------------------------------member----------------------------------
  {
    path: "/member/login",
    element: (
      <Suspense fallback={<Loading />}>
        <LoginPage />
      </Suspense>
    ),
  },
  {
    path: "/member/logout",
    element: (
      <Suspense fallback={<Loading />}>
        <LogoutPage />
      </Suspense>
    ),
  },
]);
export default Root;
