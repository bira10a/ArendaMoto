import { Header, Parking} from "./";
import { Outlet } from "react-router";

const Layout = () => {
     return (
         <>
                <Header />

            <main>
                <Outlet />
            </main>

                <Parking />
         </>
     )
}
export {Layout};