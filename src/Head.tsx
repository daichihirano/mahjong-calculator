import React, {useContext} from 'react'
import type { FC } from 'react'
import { Button, Paper } from '@mui/material';
import { styled } from '@mui/system';

import { 
    waitContext,
    subPointContext,
    sumSubPointContext,
    mentsuListContext,
    headContext,
} from './context/Context'

interface Head {
    name : string;
    fu : number;
};

const StyledPaper = styled(Paper)({
    margin:'10px',
    padding:'10px',
    backgroundColor:'#E8DABE'
});
const StyledButton = styled(Button)({
    backgroundColor:'#EDF0E0',
});

const Head:FC=()=>{
    const {wait, setWait} = useContext(waitContext);
    const {subPoint, setSubPoint} = useContext(subPointContext);
    const {sumSubPoint, setSumSubPoint} = useContext(sumSubPointContext);
    const {mentsuList, setMentsuList} = useContext(mentsuListContext);
    const {head, setHead} = useContext(headContext);

    const onClickHead=(e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
        const selectHead:Head ={
            name : e.currentTarget.name,
            fu : Number(e.currentTarget.value)
        }
        setHead(selectHead);

        var totalSubPoint:number = 25;
        if(subPoint.fu !== 25){
            totalSubPoint = 20 + subPoint.fu + Number(e.currentTarget.value) + wait.fu +
                mentsuList.map((mentsu)=>(
                  mentsu.fu
                )).reduce((sumFu, fu)=>(
                  sumFu += fu
                ),0)
            totalSubPoint = Math.ceil(totalSubPoint/10)*10
        }
        setSumSubPoint(totalSubPoint);
    }
    return (
        <StyledPaper>
            ④雀頭を選んでください<br></br>
            <StyledButton variant="outlined" value={0} name={"数牌"} onClick={onClickHead}>数牌</StyledButton>
            <StyledButton variant="outlined" value={0} name={"オタ風"} onClick={onClickHead}>オタ風</StyledButton>
            <StyledButton variant="outlined" value={2} name={"自風"} onClick={onClickHead}>自風</StyledButton>
            <StyledButton variant="outlined" value={2} name={"場風"} onClick={onClickHead}>場風</StyledButton>
            <StyledButton variant="outlined" value={4} name={"自風+場風"} onClick={onClickHead}>自風+場風</StyledButton>
            <StyledButton variant="outlined" value={2} name={"三元牌"} onClick={onClickHead}>三元牌</StyledButton>
        </StyledPaper>
    )
}
export default Head;