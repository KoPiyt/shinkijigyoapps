import type { NextPage } from 'next';
import { useState } from 'react';

const Home: NextPage = () => {
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');
  const [text3, setText3] = useState('');

  const handleChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText1(event.target.value);
  };

  const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText2(event.target.value);
  };

  const handleChange3 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText3(event.target.value);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-4">
      <div className="text-center">
        <input
          type="text"
          value={text1}
          onChange={handleChange1}
          className="w-1/2 p-2 text-xl border-2 border-gray-300 rounded-md"
        />
        <p className="text-xl">入力されたテキスト1: {text1}</p>
      </div>
      <div className="text-center">
        <input
          type="text"
          value={text2}
          onChange={handleChange2}
          className="w-1/2 p-2 text-xl border-2 border-gray-300 rounded-md"
        />
        <p className="text-xl">入力されたテキスト2: {text2}</p>
      </div>
      <div className="text-center">
        <input
          type="text"
          value={text3}
          onChange={handleChange3}
          className="w-1/2 p-2 text-xl border-2 border-gray-300 rounded-md"
        />
        <p className="text-xl">入力されたテキスト3: {text3}</p>
      </div>
    </div>
  );
};

export default Home;

