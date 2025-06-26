import './styles/index.scss';
import {Routes, Route} from 'react-router';
import { Suspense } from 'react';
import { useTheme } from './themes/useTheme';

import { Layout } from "./components/Layout";
import { HomeAsync } from './pages/Home/Home.async';
import { MotoAsync } from "./pages/Moto/Moto.async";
import { NotFoundPageAsync } from "./pages/NotFoundPage/NotFoundPage.async";


const App = () => {
  const {theme, toggleTheme} = useTheme();

  return (
    <div className={`app ${theme} `}>
      <button onClick={toggleTheme}>++++++</button>
      <Suspense fallback={<div>Loading 00007777...</div>}>
        <Routes>
          <Route path="/" element={ <Layout /> }>
              <Route index element={
                <HomeAsync />
              } />
              
              <Route path="moto" element={
                <MotoAsync />
              } />
              <Route path="*" element={
                <NotFoundPageAsync />
              } />
          </Route>
        </Routes>
      </Suspense>
    </div>
  )
}

export default App
