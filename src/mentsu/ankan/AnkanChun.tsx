import React, {useContext} from 'react'
import type { FC } from 'react'
import { Button } from '@mui/material';

import { mentsuListContext } from '../../context/Context'

const AnkanChun:FC=()=>{
    const {mentsuList, setMentsuList} = useContext(mentsuListContext);
    var basePointList:Array<number> = [];
    for(var i:number = 0; i<=4; i++){
        basePointList.push(i);
    }

    interface Mentsu {
        name : string;
        type : string;
        fu : number;
    }

    const onClickPointButton = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
        
        console.log(mentsuList);
        const mentsuMinkoChun : Mentsu = {
            name:"暗槓",
            type : "2~8",
            fu : Number(e.currentTarget.value)
        } 
        const newMentsuList : Mentsu[] = [...mentsuList, mentsuMinkoChun];
        if(newMentsuList.length > 4){
            newMentsuList.shift();
        }
        setMentsuList(newMentsuList);
    }

    return (
        <div>
            {basePointList.map((point,idx)=>{
                return(
                    <Button variant="outlined" value={16*point} onClick={onClickPointButton}  key={idx}>{point}</Button>
                )
            })}
        </div>
    )
}
export default AnkanChun;