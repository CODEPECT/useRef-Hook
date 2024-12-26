import React from 'react';
import ReactDOM from 'react-dom/client';
import Ref from './Ref';
import Example2 from './Example2';
import Reffun1 from './Reffun1';
import Dom from './Dom';
import Prev from './Prev';
import Recalc from './Recalc';
import Timers from './Timers';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Timers/>
  </React.StrictMode>
);

