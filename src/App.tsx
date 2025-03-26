import { Header, Main, OurAdvantages } from "./components"
import './app.css';
import './Reset.css';
import { AboutUs } from "./pages/aboutUs";
import {Routes, Route, Link} from 'react-router';
import { Home } from "./pages/home";
import { Moto } from "./pages/moto";
import { NotFoundPage } from "./pages/NotFoundPage";

const App = () => {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/moto" element={<Moto />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>


      
    </div>
  )
}

export default App
