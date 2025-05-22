import { useRoutes, BrowserRouter } from "react-router-dom";
import Home from "../Home/home";
import MyAccount from "../MyAccount/myAccount";
import MyOrder from "../MyOrder/myOrder";
import NotFound from "../NotFound/notFound";
import SingIn from "../SingIn/singIn";
import "../../App.css";
import Navbar from "../../Components/Navbar/navbar";
import { ShoppingCardProvider } from "../../Context/context";

// Funcion define las rutas
function AppRoutes() {
  const router = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/MyAccount",
      element: <MyAccount />,
    },
    {
      path: "/MyOrders",
      element: <MyOrder />,
    },
    {
      path: "/*",
      element: <NotFound />,
    },
    {
      path: "/Sing-In",
      element: <SingIn />,
    },
  ]);

  return router;
}

function App() {
  return (
    <ShoppingCardProvider>
      <div>
        <BrowserRouter>
          <Navbar />
          <AppRoutes />
        </BrowserRouter>
      </div>
    </ShoppingCardProvider>
  );
}

export default App;
