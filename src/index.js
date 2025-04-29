// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';   // 없으면 지우거나 빈 파일로 생성
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
