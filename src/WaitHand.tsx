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
import { WaitInterface } from './constance/Interface';

const StyledPaper = styled(Paper)({
    margin:'10px',
    padding:'10px',
    backgroundColor:'#E8DABE',
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
const WaitHand:FC=()=>{
    const {wait, setWait} = useContext(waitContext);
    const {subPoint, setSubPoint} = useContext(subPointContext);
    const {sumSubPoint, setSumSubPoint} = useContext(sumSubPointContext);
    const {mentsuList, setMentsuList} = useContext(mentsuListContext);
    const {head, setHead} = useContext(headContext);

    

    const onClickWait=(e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
        const selectWait:WaitInterface ={
            name : e.currentTarget.name,
            fu : Number(e.currentTarget.value)
        }

        setWait(selectWait);

        var totalSubPoint:number = 25;
        if(subPoint.fu !== 25){
            totalSubPoint = 20 + subPoint.fu + head.fu + (Number(e.currentTarget.value)) +
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
            ③待ちの形を選んでください → {wait.name}:{wait.fu}符
            <StyledBox>
                <StyledButton variant="outlined" value={0} name={"両面"} onClick={onClickWait}>両面</StyledButton>
                <StyledButton variant="outlined" value={0} name={"シャボ"} onClick={onClickWait}>シャボ</StyledButton>
                <StyledButton variant="outlined" value={2} name={"ペンチャン"} onClick={onClickWait}>ペンチャン</StyledButton>
                <StyledButton variant="outlined" value={2} name={"カンチャン"} onClick={onClickWait}>カンチャン</StyledButton>
                <StyledButton variant="outlined" value={2} name={"単騎"} onClick={onClickWait}>単騎</StyledButton>
                <StyledButton variant="outlined" value={2} name={"ノベタン"} onClick={onClickWait}>ノベタン</StyledButton>
            </StyledBox>
        </StyledPaper>
    )
}
export default WaitHand;