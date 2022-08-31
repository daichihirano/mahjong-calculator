import React, {useContext, useState} from 'react'
import logo from './logo.svg';
import './App.css';
import {Button} from '@mui/material'

import WinHand from './WinHand';
import BasePoint from './BasePoint';
import Shuntsu from './Shuntsu';
import WaitHand from './WaitHand';
import Head from './Head';

import {
  pointContext,
  subPointContext,
  mentsuListContext,
  shuntsuContext,
  headContext,
  waitContext,
} from './context/Context';

import Minko from './minko/Minko';
import Anko from './anko/Anko';
import Minkan from './minkan/Minkan';
import Ankan from './ankan/Ankan';



function App() {

  interface Mentsu {
    name : string;
    type : string;
    fu : number;
  }

  const [basePoint, setBasePoint] = useState(0)
  const [subPoint, setSubPoint] = useState(0)
  const [shuntsu, setShuntsu] = useState<Mentsu>({
    name : "",
    type : "",
    fu : 0
  });
  const [mentsuList, setMentsuList] = useState<Mentsu[]>([{
    name:"-",
    type:"-",
    fu:0
  },
  {
    name:"-",
    type:"-",
    fu:0
  },
  {
    name:"-",
    type:"-",
    fu:0
  },
  {
    name:"-",
    type:"-",
    fu:0
  }
  ]);

  const [head, setHead] = useState(0);
  const [wait, setWait] = useState(0);
  const [totalFu, setTotalFu] = useState(20);
  

  return (
    <div>
      <h1>符計算</h1>
      <h2>翻数：{basePoint}</h2>
      <h2>
        符：{subPoint == 25 ? 
            25
            :
            20 + subPoint + head + wait +
            mentsuList.map((mentsu)=>(
              mentsu.fu
            )).reduce((sumFu, fu)=>(
              sumFu += fu
            ),0)
            }
      </h2>
      <div>
        あなたのメンツは
        {mentsuList.map((mentsu)=>(
              "面子の種類:" + mentsu.name + " 牌の種類:" + mentsu.type + " " + mentsu.fu + "符/"
        ))}
      </div>
      <div>
        何翻?
        <pointContext.Provider value={{basePoint, setBasePoint}}>
          <BasePoint />
        </pointContext.Provider>
      </div>
      <div>
        上がり方
        <subPointContext.Provider value={{subPoint, setSubPoint}}>
        翻数:{subPoint}
          <WinHand />
        </subPointContext.Provider>
      </div>
      <div>
        順子何個？
        <mentsuListContext.Provider  value = {{mentsuList, setMentsuList}}>
          <Shuntsu />
        </mentsuListContext.Provider>
      </div>
      <div>
        明刻何個？
        <Minko />
      </div>
      <div>
        暗刻
        <Anko />
      </div>
      <div>
        明槓
        <Minkan />
      </div>
      <div>
        暗槓
        <Ankan />
      </div>
      <div>
        雀頭は？
        翻数:{head}
        <headContext.Provider value={{head, setHead}}>
          <Head />
        </headContext.Provider>
      </div>
      <div>
        待ちの形は？
        翻数:{wait}
        <waitContext.Provider value={{wait, setWait}}>
          <WaitHand />
        </waitContext.Provider>
      </div>

    </div>
    
  );
}

export default App;
