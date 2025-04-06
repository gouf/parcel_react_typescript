import React from 'react';

// Props の型定義
interface GreetingProps {
  name: string;
  message?: string; // オプショナルなプロパティ
}

// 関数コンポーネントの型付け
const Greeting: React.FC<GreetingProps> = ({ name, message = 'ようこそ' }) => {
  return (
    <div className="greeting">
      <h2>{message}, {name}さん！</h2>
      <p>React と TypeScript の学習を始めましょう。</p>
    </div>
  );
};

export default Greeting;