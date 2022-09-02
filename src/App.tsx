import React, {useContext, useState} from 'react'
import './App.css';

import WinHand from './WinHand';
import BasePoint from './BasePoint';
import Mentsu from './mentsu/Mentsu';
import WaitHand from './WaitHand';
import Head from './Head';

import {
  pointContext,
  subPointContext,
  mentsuListContext,
  headContext,
  waitContext,
} from './context/Context';




function App() {

  interface Mentsu {
    name : string;
    type : string;
    fu : number;
  }

  const emptyMentsu : Mentsu = {
    name:"",
    type:"",
    fu:0
  }

  const [basePoint, setBasePoint] = useState(0)
  const [subPoint, setSubPoint] = useState(0)
  const [mentsuList, setMentsuList] = useState<Mentsu[]>([
    emptyMentsu,emptyMentsu,emptyMentsu,emptyMentsu
  ]);

  const [head, setHead] = useState(0);
  const [wait, setWait] = useState(0);
  

  return (
    <div>
      <h1>符計算</h1>
      <h2>翻数：{basePoint}</h2>
      <h2>
        符：{subPoint === 25 ? 
            25
            :
            Math.ceil((20 + subPoint + head + wait +
            mentsuList.map((mentsu)=>(
              mentsu.fu
            )).reduce((sumFu, fu)=>(
              sumFu += fu
            ),0))/10)*10
            }
      </h2>
      <h3>
        実際の符：{subPoint === 25 ? 
            25
            :
            20 + subPoint + head + wait +
            mentsuList.map((mentsu)=>(
              mentsu.fu
            )).reduce((sumFu, fu)=>(
              sumFu += fu
            ),0)
            }
      </h3>
      <div>
        あなたのメンツは
        {mentsuList.map((mentsu, key)=>(
              <div key={key}>{"面子の種類:" + mentsu.name + " 牌の種類:" + mentsu.type + " " + mentsu.fu + "符"}</div>
        ))}
      </div>
        <pointContext.Provider value={{basePoint, setBasePoint}}>
          <BasePoint />
        </pointContext.Provider>
        <subPointContext.Provider value={{subPoint, setSubPoint}}>
          <WinHand />
        </subPointContext.Provider>
        <waitContext.Provider value={{wait, setWait}}>
          <WaitHand />
        </waitContext.Provider>
        <headContext.Provider value={{head, setHead}}>
          <Head />
        </headContext.Provider>
        <mentsuListContext.Provider  value = {{mentsuList, setMentsuList}}>
          <Mentsu />
        </mentsuListContext.Provider>
    </div>
    
  );
}

export default App;
