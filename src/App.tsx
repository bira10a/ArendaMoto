import { Header, Main, OurAdvantages } from "./components"
import './app.css';
import './Reset.css';
import { AboutUs } from "./pages/aboutUs";
import {Routes, Route, Link} from 'react-router';
import { Home } from "./pages/home";
import { Moto } from "./pages/moto";
import { NotFoundPage } from "./pages/NotFoundPage";
import { Layout } from "./components/Layout";

const App = () => {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={ <Layout /> }>
          <Route index element={<Home />} />
          <Route path="moto" element={<Moto />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>


      
    </div>
  )
}

export default App
