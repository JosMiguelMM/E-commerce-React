import { useRoutes, BrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import MyAccount from "../MyAccount/myAccount";
import MyOrder from "../MyOrder/myOrder";
import NotFound from "../NotFound/notFound";
import SingIn from "../SingIn/SingIn";
import "../../App.css";
import Navbar from "../../Components/Navbar/navbar";


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
    <>
      <div>
        <BrowserRouter>
          <Navbar/>
          <AppRoutes />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
