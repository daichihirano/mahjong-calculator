import React, {useContext} from 'react'
import type { FC } from 'react'
import { Button } from '@mui/material';
import { mentsuListContext } from '../context/Context'

const Shuntsu:FC=()=>{
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
        const mentsuShuntsu : Mentsu = {
            name:"順子",
            type : "無",
            fu : 0
        };
        const newMentsuList : Mentsu[] = [...mentsuList, mentsuShuntsu];
        if(newMentsuList.length > 4){
            newMentsuList.shift();
        };
        setMentsuList(newMentsuList);
    }

    return (
        <div>
            順子
            {basePointList.map((point,idx)=>{
                return(
                    <Button variant="outlined" value={point} onClick={onClickPointButton}  key={idx}>{point}</Button>
                )
            })}
        </div>
    )
}
export default Shuntsu;