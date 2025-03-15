import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { ConsumoApi } from './dragonBall';
import { InfoCharaters } from './CharatersInfo';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ConsumoApi />
    <InfoCharaters />
  </React.StrictMode>
);

