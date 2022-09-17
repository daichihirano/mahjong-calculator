import React, {useContext} from 'react'
import type { FC } from 'react'
import { Button, Paper, Box } from '@mui/material';
import { pointContext } from './context/Context'
import { styled } from '@mui/system';

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
const BasePoint:FC=()=>{

    const {basePoint, setBasePoint} = useContext(pointContext);
    
    var basePointList:Array<number> = [];
    for(var i:number = 1; i<=13; i++){
        basePointList.push(i);
    }

    const onClickPointButton = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
        setBasePoint(Number(e.currentTarget.value));
    }

    return (
        <StyledPaper>
            ①何翻ですか?
            <StyledBox>
                {basePointList.map((point,idx)=>{
                    return(
                        <StyledButton variant='outlined' value={point} onClick={onClickPointButton}  key={idx}>{point}</StyledButton>
                    )
                })}
            </StyledBox>
        </StyledPaper>
    )
}
export default BasePoint;