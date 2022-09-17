import type { FC } from 'react';
import {useContext} from 'react';
import { styled } from '@mui/system';
import {
    Paper,
    Box,
} from '@mui/material';

import { 
    waitContext,
    subPointContext,
    mentsuListContext,
    headContext,
} from './context/Context'

const StyledPaper = styled(Paper)({
    margin:'10px',
    padding:'10px',
    background:'#E8DABE',
});
const HeadStyledPaper = styled(Paper)({
    display:'flex',
    flexDirection:'column',
    width:'20vw',
    height:'70px',
    justifyContent:'space-around',
    alignItems: 'center',
    alignContent: 'space-around',
    border: 'solid'
});
const HandStyledPaper = styled(Paper)({
    display:'flex',
    flexDirection:'column',
    width:'15vw',
    height:'70px',
    justifyContent:'space-around',
    alignItems: 'center',
    alignContent: 'space-around',
    border: 'solid'
});
const FlexRowStyledBox = styled(Box)({
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    alignContent:'center',
});
const FlexColumnStyledBox = styled(Box)({
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    alignContent:'center',
});

const Hand:FC=()=>{
    const {wait, setWait} = useContext(waitContext);
    const {subPoint, setSubPoint} = useContext(subPointContext);
    const {mentsuList, setMentsuList} = useContext(mentsuListContext);
    const {head, setHead} = useContext(headContext);
    return (
        <StyledPaper >
            <FlexColumnStyledBox>
                <div>
                アガり方：{subPoint.name}  {subPoint.fu}符 / 待ち：{wait.name}  {wait.fu}符 
                </div>
                <div>
                    <FlexRowStyledBox>
                        <HeadStyledPaper>
                            <div>{head.name}</div>
                            <div>{""}</div>
                            <div>{head.fu+"符"}</div>
                        </HeadStyledPaper>
                        {mentsuList.map((mentsu, key)=>(
                        <HandStyledPaper key={key}>
                            <div>{mentsu.name}</div>
                            <div>{mentsu.type}</div>
                            <div>{mentsu.fu + "符"}</div>
                        </HandStyledPaper>
                    ))}
                    </FlexRowStyledBox>
                </div>
            </FlexColumnStyledBox>
        </StyledPaper>
    )
}
export default Hand;