import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import Loading from "../pages/Loading";

// Router(Controller 대상이 되는 페이지를 가져와야 한다.)
const MainPage = lazy(() => import("../pages/MainPage"));

const Root = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Loading />}>
        <MainPage />
      </Suspense>
    ),
  },
]);
export default Root;
