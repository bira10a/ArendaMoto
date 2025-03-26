import { Header, Parking} from "./";
import { Outlet } from "react-router";

const Layout = () => {
     return (
         <>
             <Header />

             <Outlet />

             <Parking />
         </>
     )
}
export {Layout};