import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '@pages/Home';
import MapPage from '@pages/MapPage';
export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/mapTest' element={<MapPage />} />
      </Routes>
    </BrowserRouter>
  );
}
