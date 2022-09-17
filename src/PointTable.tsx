import type { FC } from 'react';
import {useContext} from 'react';
import { styled } from '@mui/system';
import {
    Paper,
    Box,
    TableCell,
    TableContainer,
    TableRow,
    Table,
    TableHead,
    TableBody
} from '@mui/material';
import { 
    pointContext,
    sumSubPointContext,
} from './context/Context';
import {
    pointTableChild,
    pointTableParent,
} from './constance/Constance';

const PointTableStyledPaper = styled(Paper)({
    margin:'10px',
    padding:'10px',
});
const FlexColumnStyledBox = styled(Box)({
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    alignContent:'center',
    background:'#E8DABE',
});
const FlexRowStyledBox = styled(Box)({
  display:'flex',
  flexDirection:'row',
  justifyContent:'center',
  alignItems:'center',
  alignContent:'center',
  background:'#E8DABE',
});
const PointTable:FC=()=>{
    const {basePoint, setBasePoint} = useContext(pointContext);
    const {sumSubPoint, setSumSubPoint} = useContext(sumSubPointContext);
    const point:number = pointTableChild[sumSubPoint][basePoint]['ron'];
    var paperClass:string = 'rainbow';
    var message:string = '神！天才！';
    if(point < 8000){
      paperClass = 'offwhite';
      message = '次は満貫';
    } else if(point < 12000){
      paperClass = 'blue';
      message = 'まあまあすごいね';
    } else if(point < 16000){
      paperClass = 'green';
      message = 'ラッキー';
    } else if(point < 24000){
      paperClass = 'red';
      message = 'さすがに1位';
    } else if(point < 32000){
      paperClass = 'gold';
      message = '帰っておいしい夜ご飯を食べよう';
    }

    return (
        <PointTableStyledPaper className={paperClass}>
        <FlexColumnStyledBox sx={{margin:'10px'}}>
          <FlexColumnStyledBox sx={{width:'100%'}}>
            <div>{basePoint}翻  {sumSubPoint}符</div>
            <div>{message}</div>
          </FlexColumnStyledBox>
          <TableContainer sx={{backgroundColor:'#E8DABE'}}>
            <Table>
              <TableHead>
                <TableRow sx={{borderBottom:'solid', borderTop:'solid'}}>
                  <TableCell size='small' sx={{borderLeft:'solid'}}></TableCell>
                  <TableCell size='small' align='center' sx={{borderLeft:'solid'}}>ツモ</TableCell>
                  <TableCell size='small' align='center' sx={{borderLeft:'solid', borderRight:'solid'}}>ロン</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow sx={{borderBottom:'solid'}}>
                  <TableCell size='small' align='center' sx={{borderLeft:'solid'}}>親</TableCell>
                  <TableCell size='small' align='center' sx={{borderLeft:'solid'}}>{pointTableParent[sumSubPoint][basePoint]['tsumo']}オール</TableCell>
                  <TableCell size='small' align='center' sx={{borderLeft:'solid', borderRight:'solid'}}>{pointTableParent[sumSubPoint][basePoint]['ron']}</TableCell>
                </TableRow>
                <TableRow sx={{borderBottom:'solid'}}>
                  <TableCell size='small' align='center' sx={{borderLeft:'solid'}}>子</TableCell>
                  <TableCell size='small' align='center' sx={{borderLeft:'solid'}}>{pointTableChild[sumSubPoint][basePoint]['tsumo']}</TableCell>
                  <TableCell size='small' align='center' sx={{borderLeft:'solid', borderRight:'solid'}}>{pointTableChild[sumSubPoint][basePoint]['ron']}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </FlexColumnStyledBox>
      </PointTableStyledPaper>
    )
}
export default PointTable;