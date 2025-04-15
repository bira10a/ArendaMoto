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
            <Route index element={
              <Suspense fallback={<div>Loading HomeAsync...</div>}>
                <HomeAsync />
              </Suspense>
             } />
            
            <Route path="moto" element={
              <Suspense fallback={<div>Loading MotoAsync...</div>}>
                <MotoAsync />
              </Suspense>
            } />
            <Route path="*" element={
              <Suspense fallback={<div>Loading NotFoundPageAsync...</div>}>
                <NotFoundPageAsync />
              </Suspense>
            } />
        </Route>
      </Routes>
    </div>
  )
}

export default App
