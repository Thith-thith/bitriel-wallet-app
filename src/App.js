import { AnimatePresence } from 'framer-motion';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { routes } from './routes';
import './styles/app.css';
import './styles/global.css';

export default function App() {
  return (
    <BrowserRouter>
      <AnimatePresence>
        <Routes>
          {routes.map((i) => (
            <Route key={i.path} path={i.path} element={i.element} />
          ))}
        </Routes>
      </AnimatePresence>
    </BrowserRouter>
  );
}
