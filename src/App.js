import { AnimatePresence } from 'framer-motion';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { routes } from './routes';
import { Helmet } from 'react-helmet';
import './styles/global.css';
import './styles/app.css';

export default function App() {
  return (
    <BrowserRouter>
      <AnimatePresence>
        <Helmet>
          <meta charSet="utf-8" />
          <title>BITRIEL.COM</title>
          <link rel="canonical" href="https://bitriel.com" />
        </Helmet>
        ‍
        <Routes>
          {routes.map((i) => (
            <Route key={i.path} path={i.path} element={i.element} />
          ))}
        </Routes>
      </AnimatePresence>
    </BrowserRouter>
  );
}
