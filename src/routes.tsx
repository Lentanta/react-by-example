import { Example2 } from "./pages/Example2";
import { Example3 } from "./pages/Example3";
import { ReactRender } from "./pages/ReactRender";
import { ReventChildRerender } from "./pages/ReventChildRerender";

export const routes = [
  {
    path: "/",
    name: "Home",
    element: <h1>Hello!</h1>
  },
  {
    path: "/react-render",
    name: "When React re-render",
    element: <ReactRender />
  },
  {
    path: "/prevent-child-re-render",
    name: "Prevent children component re-render",
    element: <ReventChildRerender />
  },
  {
    path: "/use-memo",
    name: "useMemo hook",
    element: <Example2 />
  },
  {
    path: "/use-callback",
    name: "useCall hook",
    element: <Example3 />
  }
]


