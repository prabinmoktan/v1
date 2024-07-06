import { Route, Routes } from 'react-router-dom';
import Homepage from '../(pages)/Homepage';
import About from '../(pages)/About';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default AppRoutes;
