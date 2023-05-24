import { Home } from "./components/Home";
import ProductsContainer from "./components/ProductsContainer";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
    {
        path: '/store',
        element: <ProductsContainer productType={'All'} />
  }
];

export default AppRoutes;
