import './App.css';
import React, {useState} from "react";

const INITIAL_COUNT = 19;
const INITIAL_NAME = 'Haru';
const INITIAL_DUE = '2021/12/18';

const DueComponent = () => {
    const [due, setDue] = useState(INITIAL_DUE);
    const handleChangeDue = (a) => {
        setDue(a.target.value);
    };
    return(
        <div>
            <p>現在の期日：{due}</p>
            <p>初期の期日：{INITIAL_DUE}</p>
            <input type="text" onChange={handleChangeDue} />
        </div>
    );
};

const SampleComponent = () => {
  const [count, setCount] = useState(INITIAL_COUNT);
  const [name, setName] = useState(INITIAL_NAME);

  const countIncrement = () => setCount((prevCount) => prevCount + 1);
  const countDecrement = () => setCount((prevCount) => prevCount - 1);
  const countReset = () => setCount(INITIAL_COUNT);

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  return(
      <div className="App">
        <p>
          現在のカウント数：<b>{count}</b>
          <br />
          カウントの初期値：{INITIAL_COUNT}
        </p>
        <button onClick={countIncrement}>カウント追加</button>
        <button onClick={countDecrement}>カウント減少</button>
        <button onClick={countReset}>カウントリセット</button>
          <p>
              Hello, <b>{name} !!</b>
              <br />
              nameの初期値：<b>{INITIAL_NAME}</b>
          </p>
          <input type="text" onChange={handleChangeName} />
      </div>
  );
};


export default function App() {
    return(
        <>
        <SampleComponent />
        <SampleComponent />
        <DueComponent />
        </>
    );
};
