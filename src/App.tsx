import {useState} from 'react'
import { styled } from '@mui/system';
import {
  Box,
  Paper
} from '@mui/material';

import './App.css';

import WinHand from './WinHand';
import BasePoint from './BasePoint';
import Mentsu from './mentsu/Mentsu';
import WaitHand from './WaitHand';
import Head from './Head';
import PointTable from './PointTable';
import Hand from './Hand';

import {
  pointContext,
  subPointContext,
  sumSubPointContext,
  mentsuListContext,
  headContext,
  waitContext,
} from './context/Context';

import {
  emptyMentsu,
  emptyHead,
  emptyWait,
  emptyWin
} from './constance/Constance';


const StyledPaper = styled(Paper)({
  margin:'10px',
  padding:'10px',
  background:'#E8DABE',
});

const FlexColumnStyledBox = styled(Box)({
  display:'flex',
  flexDirection:'column',
  justifyContent:'center',
  alignItems:'center',
  alignContent:'center',
});
const FlexRowStyledBox = styled(Box)({
  display:'flex',
  flexDirection:'row',
  justifyContent:'center',
  alignItems:'center',
  alignContent:'center',
});


function App() {
  const [basePoint, setBasePoint] = useState(1)
  const [subPoint, setSubPoint] = useState(emptyWin)
  const [sumSubPoint, setSumSubPoint] = useState(20)
  const [mentsuList, setMentsuList] = useState([emptyMentsu,emptyMentsu,emptyMentsu,emptyMentsu]);
  const [head, setHead] = useState(emptyHead);
  const [wait, setWait] = useState(emptyWait);
  
  return (
    <div>
      <FlexColumnStyledBox >
        <h1>麻雀の符計算</h1>
        <div>翻数や手牌を入力すると点数を返します</div>
      </FlexColumnStyledBox>       
      <pointContext.Provider value={{basePoint, setBasePoint}}>
      <sumSubPointContext.Provider value={{sumSubPoint, setSumSubPoint}}>
      <subPointContext.Provider value={{subPoint, setSubPoint}}>
      <waitContext.Provider value={{wait, setWait}}>
      <headContext.Provider value={{head, setHead}}>
      <mentsuListContext.Provider  value={{mentsuList, setMentsuList}}>
        <PointTable />
        <BasePoint />     
        <WinHand />  
        <WaitHand />
        <Head />
        <Mentsu />
        <Hand />
        <PointTable />
      </mentsuListContext.Provider>
      </headContext.Provider>
      </waitContext.Provider>
      </subPointContext.Provider>
      </sumSubPointContext.Provider>
      </pointContext.Provider>      
    </div>
  );
}

export default App;
