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

import {
  pointTableParent
} from './constance/Constance';

import { Box, Paper } from '@mui/material';

function App() {

  interface Mentsu {
    name : string;
    type : string;
    fu : number;
  }

  interface Head {
    name : string;
    fu : number;
  }

  const emptyMentsu : Mentsu = {
    name:"-",
    type:"-",
    fu:0
  }

  const emptyHead : Head = {
    name:"-",
    fu:0
  }

  const [basePoint, setBasePoint] = useState(1)
  const [subPoint, setSubPoint] = useState(20)
  const [mentsuList, setMentsuList] = useState<Mentsu[]>([
    emptyMentsu,emptyMentsu,emptyMentsu,emptyMentsu
  ]);

  const [head, setHead] = useState(emptyHead);
  const [wait, setWait] = useState(0);
  
  const A:number = 20;
  const B:number = 5;
  const C:string = 'tsumo';

  return (
    <div>
      <h1>符計算</h1>
      <div>
        {pointTableParent[subPoint][basePoint]['tsumo']}
      </div>
      <h2>翻数：{basePoint}</h2>
      <h2>
        符：{subPoint === 25 ? 
            25
            :
            Math.ceil((20 + subPoint + head.fu + wait +
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
            20 + subPoint + head.fu + wait +
            mentsuList.map((mentsu)=>(
              mentsu.fu
            )).reduce((sumFu, fu)=>(
              sumFu += fu
            ),0)
            }
      </h3>
      <Box className='hand'>
        <Paper className='hand-head' >
          <div>{head.name}</div>
          <div>{head.fu+"符"}</div>
        </Paper>
        {mentsuList.map((mentsu, key)=>(
          <Paper className='hand-mentsu' key={key}>
            <div>{mentsu.name}</div>
            <div>{mentsu.type}</div>
            <div>{mentsu.fu + "符"}</div>
          </Paper>
        ))}
      </Box>
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
