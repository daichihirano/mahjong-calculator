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
  sumSubPointContext,
  mentsuListContext,
  headContext,
  waitContext,
} from './context/Context';

import {
  pointTableChild,
  pointTableParent,
} from './constance/Constance';

import {
  Box,
  Paper,
  TableCell,
  TableContainer,
  TableRow,
  Table,
  TableHead,
  TableBody
} from '@mui/material';


import { styled } from '@mui/system';
const StyledPaper = styled(Paper)({
  margin:'10px',
  padding:'10px',
  background:'linear-gradient(45deg, #E60012 0%, #F39800 14%, #FFF100 28%, #009944 43%, #0068B7 57%, #1D2088 71%, #920783 85%, #E60012 100%)',
});

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

  interface Wait {
    name : string;
    fu : number;
  }

  interface Win {
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

  const emptyWait : Wait = {
    name:"-",
    fu:0
  }

  const emptyWin : Win = {
    name:"-",
    fu:0
  }

  

  const [basePoint, setBasePoint] = useState(1)
  const [subPoint, setSubPoint] = useState(emptyWin)
  const [sumSubPoint, setSumSubPoint] = useState(20)
  const [mentsuList, setMentsuList] = useState<Mentsu[]>([
    emptyMentsu,emptyMentsu,emptyMentsu,emptyMentsu
  ]);

  const [head, setHead] = useState(emptyHead);
  const [wait, setWait] = useState(emptyWait);
  

  return (
    <div>
      <h1>符計算</h1>
      <div>
        {basePoint}翻  {sumSubPoint}符
      </div>
      
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>ツモ</TableCell>
              <TableCell>ロン</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>親</TableCell>
              <TableCell>{pointTableParent[sumSubPoint][basePoint]['tsumo']}オール</TableCell>
              <TableCell>{pointTableParent[sumSubPoint][basePoint]['ron']}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>子</TableCell>
              <TableCell>{pointTableChild[sumSubPoint][basePoint]['tsumo']}</TableCell>
              <TableCell>{pointTableChild[sumSubPoint][basePoint]['ron']}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <div>
      アガり方：{subPoint.name}  {subPoint.fu}符 / 待ち：{wait.name}  {wait.fu}符 
      </div>
      
      <StyledPaper className='hand'>
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
      </StyledPaper>
      <pointContext.Provider value={{basePoint, setBasePoint}}>
      <sumSubPointContext.Provider value={{sumSubPoint, setSumSubPoint}}>
      <subPointContext.Provider value={{subPoint, setSubPoint}}>
      <waitContext.Provider value={{wait, setWait}}>
      <headContext.Provider value={{head, setHead}}>
      <mentsuListContext.Provider  value={{mentsuList, setMentsuList}}>
        <BasePoint />     
        <WinHand />  
        <WaitHand />
        <Head />
        <Mentsu />
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
