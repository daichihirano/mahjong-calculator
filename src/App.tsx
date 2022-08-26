import React, {useContext, useState} from 'react'
import logo from './logo.svg';
import './App.css';
import {Button} from '@mui/material'

import WinHand from './WinHand';
import BasePoint from './BasePoint';

export const pointContext=React.createContext({} as{
  basePoint : number
  setBasePoint : React.Dispatch<React.SetStateAction<number>>
});
export const subPointContext=React.createContext({} as{
  subPoint : number
  setSubPoint : React.Dispatch<React.SetStateAction<number>>
});

function App() {

  const [basePoint, setBasePoint] = useState(0)
  const [subPoint, setSubPoint] = useState(0)

  return (
    <div>
      <h1>符計算</h1>
      <h2>翻数：{basePoint}</h2>
      <h2>符：{subPoint}</h2>
      <div>
        何翻?
        <pointContext.Provider value={{basePoint, setBasePoint}}>
          <BasePoint />
        </pointContext.Provider>
      </div>
      <subPointContext.Provider value={{subPoint, setSubPoint}}>
        <WinHand />
      </subPointContext.Provider>
      <div>
        上がり方
      </div>
      <div>
        順子何個？
      </div>
      <div>
        明刻何個？
        <div>
          2~8?
        </div>
        <div>
          1,9,字牌
        </div>
      </div>
      <div>
        暗刻
        <div>
          2~8?
        </div>
        <div>
          1,9,字牌
        </div>
      </div>
      <div>
        明槓
        <div>
          2~8?
        </div>
        <div>
          1,9,字牌
        </div>
      </div>
      <div>
        暗槓
        <div>
          2~8?
        </div>
        <div>
          1,9,字牌
        </div>
      </div>
      <div>
        雀頭は？
        <div>数牌</div>
        <div>オタ風</div>
        <div>自風</div>
        <div>場風</div>
        <div>三元牌</div>
      </div>
      <div>
        待ちの形は？
        <div>両面</div>
        <div>シャボ</div>
        <div>ペンチャン</div>
        <div>カンチャン</div>
        <div>単騎</div>
        <div>ノベタン</div>
      </div>

    </div>
    
  );
}

export default App;
