import React, { useState } from 'react';
import Greeting from './components/Greeting';

// App コンポーネントの型定義
interface AppProps {}

const App: React.FC<AppProps> = () => {
  // useState を使用した状態管理の例
  const [count, setCount] = useState<number>(0);

  // イベントハンドラの型付け
  const handleIncrement = (): void => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div className="app">
      <h1>React + TypeScript 入門</h1>

      {/* サンプルコンポーネントの使用 */}
      <Greeting name="ユーザー" />

      <div className="counter">
        <p>カウント: {count}</p>
        <button onClick={handleIncrement}>
          カウントアップ
        </button>
      </div>

      {/* 条件付きレンダリングの例 */}
      {count > 5 && (
        <p>カウントが5を超えました！</p>
      )}
    </div>
  );
};

export default App;