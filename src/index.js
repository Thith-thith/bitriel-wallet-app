import React from 'react';
import { render } from 'react-dom';
import { ConfigProvider } from 'antd';
import App from './App';

import 'antd/dist/antd.variable.min.css';
import './styles/global.css';
import 'remixicon/fonts/remixicon.css';

ConfigProvider.config({
  theme: {
    primaryColor: '#03A9F4',
  },
});

render(
  <>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </>,
  document.getElementById('root')
);
