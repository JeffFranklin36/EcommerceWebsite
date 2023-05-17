import Cart from "./components/Cart";
import { Home } from "./components/Home";
import Store from "./components/Store";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/store',
    element: <Store />
  }
];

export default AppRoutes;
