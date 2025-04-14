import './app.css';
import './Reset.css';
import {Routes, Route} from 'react-router';
import { Suspense } from 'react';
import { Layout } from "./components/Layout";
// import { Home } from "./pages/Home/Home";
import { HomeAsync } from './pages/Home/Home.async';
// import { Moto } from "./pages/Moto/Moto";
import { MotoAsync } from "./pages/Moto/Moto.async";
// import { NotFoundPage } from "./pages/NotFoundPage/NotFoundPage";
import { NotFoundPageAsync } from "./pages/NotFoundPage/NotFoundPage.async";



const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={ <Layout /> }>
          {/* <Suspense fallback={<div>Loading...</div>}> */}
            <Route index element={<HomeAsync />} />
            <Route path="moto" element={<MotoAsync />} />
            <Route path="*" element={<NotFoundPageAsync />} />
          {/* </Suspense> */}
        </Route>
      </Routes>
    </div>
  )
}

export default App
