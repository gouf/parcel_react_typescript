import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

// ルート要素を取得
const rootElement = document.getElementById('root');

// rootElement が null でないことを確認
if (!rootElement) {
  throw new Error('Root element not found');
}

// React 18 の新しいレンダリング方法
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);