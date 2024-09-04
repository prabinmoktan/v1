import { Route, Routes } from 'react-router-dom';
import Homepage from '../(pages)/Homepage';
import About from '../(pages)/About';

import Destination from '../(pages)/Destionation';
import Login from '../(pages)/Login';
import Register from '../(pages)/Register';
import Career from '../(pages)/Career';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/career" element={<Career />} />
      <Route path="/about" element={<About />} />
      <Route path="/destination" element={<Destination />} />
    </Routes>
  );
};

export default AppRoutes;
