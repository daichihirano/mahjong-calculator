import React, {useContext} from 'react'
import type { FC } from 'react'
import { Button } from '@mui/material';
import { 
    mentsuListContext,
    waitContext,
    subPointContext,
    sumSubPointContext,
    headContext,
} from '../context/Context';

import { styled } from '@mui/system';

interface Mentsu {
    name : string;
    type : string;
    fu : number;
}
const StyledButton = styled(Button)({
    backgroundColor:'#EDF0E0',
});


const MentsuButton:FC<{mentsu:Mentsu}>=({mentsu})=>{
    const {wait, setWait} = useContext(waitContext);
    const {subPoint, setSubPoint} = useContext(subPointContext);
    const {sumSubPoint, setSumSubPoint} = useContext(sumSubPointContext);
    const {mentsuList, setMentsuList} = useContext(mentsuListContext);
    const {head, setHead} = useContext(headContext);

    const onClickPointButton = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
        const newMentsuList : Mentsu[] = [...mentsuList, mentsu];
        if(newMentsuList.length > 4){
            newMentsuList.shift();
        };
        setMentsuList(newMentsuList);

        var totalSubPoint:number = 25;
        if(subPoint.fu !== 25){
            totalSubPoint = 20 + subPoint.fu + head.fu + wait.fu +
            newMentsuList.map((mentsu)=>(
                  mentsu.fu
                )).reduce((sumFu, fu)=>(
                  sumFu += fu
                ),0);
            totalSubPoint = Math.ceil(totalSubPoint/10)*10;
        }
        setSumSubPoint(totalSubPoint);
    }

    return (
        <div>
            <StyledButton variant="outlined" value={mentsu.fu} onClick={onClickPointButton}  >{mentsu.name}<br />{mentsu.type}</StyledButton>
        </div>
    )
}
export default MentsuButton;