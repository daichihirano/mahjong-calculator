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
  pointTableChild,
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
  

  return (
    <div>
      <h1>符計算</h1>
      <div>親</div>
      <div>
        ツモ{pointTableParent[subPoint === 25 ? 
            25
            :Math.ceil((20 + subPoint + head.fu + wait +
            mentsuList.map((mentsu)=>(
              mentsu.fu
            )).reduce((sumFu, fu)=>(
              sumFu += fu
            ),0))/10)*10][basePoint]['tsumo']}オール
      </div>
      <div>
        ロン{pointTableParent[subPoint][basePoint]['ron']}
      </div>
      <div>子</div>
      <div>
        ツモ{pointTableChild[subPoint === 25 ? 
            25
            :Math.ceil((20 + subPoint + head.fu + wait +
            mentsuList.map((mentsu)=>(
              mentsu.fu
            )).reduce((sumFu, fu)=>(
              sumFu += fu
            ),0))/10)*10][basePoint]['tsumo']}
      </div>
      <div>
        ロン{pointTableChild[subPoint][basePoint]['ron']}
      </div>
      <h2>
        翻数：{basePoint}<br></br>
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
      <div>
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
      </div>
      <Box className='hand'>
        <Paper className='hand-head' >
          <div>{head.name}</div>
          <div>{""}</div>
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
        <mentsuListContext.Provider  value={{mentsuList, setMentsuList}}>
          <Mentsu />
        </mentsuListContext.Provider>
    </div>
    
  );
}

export default App;
