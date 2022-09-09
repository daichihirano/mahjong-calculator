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

interface Mentsu {
    name : string;
    type : string;
    fu : number;
}

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
        if(subPoint !== 25){
            totalSubPoint = 20 + subPoint + head.fu + wait +
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
            <Button variant="outlined" value={mentsu.fu} onClick={onClickPointButton}  >{mentsu.name}<br />{mentsu.type}</Button>
        </div>
    )
}
export default MentsuButton;