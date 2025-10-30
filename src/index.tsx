// This file has been renamed to index.tsx and converted to TypeScript
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './styles/style.scss';

const container = document.getElementById('wrap');
const root = createRoot(container!);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
