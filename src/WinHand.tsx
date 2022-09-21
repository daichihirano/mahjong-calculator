import React, {useContext} from 'react'
import type { FC } from 'react'
import { Button, Paper, Box } from '@mui/material';
import { styled } from '@mui/system';

import { 
    waitContext,
    subPointContext,
    sumSubPointContext,
    mentsuListContext,
    headContext,
} from './context/Context'
import { WinInterface } from './constance/Interface';



const StyledPaper = styled(Paper)({
    margin:'10px',
    padding:'10px',
    backgroundColor:'#E8DABE'
});
const StyledButton = styled(Button)({
    backgroundColor:'#EDF0E0',
});
const StyledBox = styled(Box)({
    display:'flex',
    flexDirection:'row',
    flexWrap:'wrap',
    justifyContent:'center',
    alignItems:'center',
    alignContent:'center',
});

const WinHand:FC=()=>{
    const {wait, setWait} = useContext(waitContext);
    const {subPoint, setSubPoint} = useContext(subPointContext);
    const {sumSubPoint, setSumSubPoint} = useContext(sumSubPointContext);
    const {mentsuList, setMentsuList} = useContext(mentsuListContext);
    const {head, setHead} = useContext(headContext);

    const onClickWin=(e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
        const selectWin:WinInterface ={
            name : e.currentTarget.name,
            fu : Number(e.currentTarget.value)
        }
        setSubPoint(selectWin);
       
        var totalSubPoint:number = 20;
        if((Number(e.currentTarget.value)) === 20){
        } else if((Number(e.currentTarget.value)) === 25){
            totalSubPoint = 25;
        } else {
            totalSubPoint = 20 + (Number(e.currentTarget.value)) + head.fu + wait.fu +
                mentsuList.map((mentsu)=>(
                  mentsu.fu
                )).reduce((sumFu, fu)=>(
                  sumFu += fu
                ),0);
            totalSubPoint = Math.ceil(totalSubPoint/10)*10;
            }
        setSumSubPoint(totalSubPoint);
    }
    return (
        <StyledPaper>
            ②上がり方を選んでください → {subPoint.name}:{subPoint.fu}符<br></br>
            　平和ツモ・七対子の場合は③～⑤はスキップ
            <StyledBox>
                <StyledButton variant="outlined" value={2} name={"ツモ"} onClick={onClickWin}>ツモ</StyledButton>
                <StyledButton variant="outlined" value={10} name={"門前ロン"} onClick={onClickWin}>門前ロン</StyledButton>
                <StyledButton variant="outlined" value={0} name={"鳴きロン"} onClick={onClickWin}>鳴きロン</StyledButton>
                <StyledButton variant="outlined" value={20} name={"平和ツモ"} onClick={onClickWin}>平和ツモ</StyledButton>
                <StyledButton variant="outlined" value={25} name={"七対子"} onClick={onClickWin}>七対子</StyledButton>
            </StyledBox>
        </StyledPaper>
    )
}
export default WinHand;