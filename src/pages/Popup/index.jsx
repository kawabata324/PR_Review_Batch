import React from 'react';
import { render } from 'react-dom';

import Popup from './Popup';
import { MantineProvider } from '@mantine/core';
import './index.css';

render(
  <MantineProvider>
    <Popup />
  </MantineProvider>,
  window.document.querySelector('#app-container')
);

if (module.hot) module.hot.accept();
