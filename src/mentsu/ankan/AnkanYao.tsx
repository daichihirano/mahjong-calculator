import React, {useContext} from 'react'
import type { FC } from 'react'
import { Button } from '@mui/material';

import { mentsuListContext } from '../../context/Context'

const AnkanYao:FC=()=>{
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
        
        const mentsuMinkoChun : Mentsu = {
            name:"暗槓",
            type : "1,9,字",
            fu : 32
        } 
        var newMentsuList:Mentsu[] = mentsuList;
        for(var i:number = 0; i<Number(e.currentTarget.value); i++){
            console.log(i)
            newMentsuList.push(mentsuMinkoChun);
            if(newMentsuList.length > 4){
                newMentsuList.shift();
            }
            setMentsuList([...mentsuList, mentsuMinkoChun]);
            console.log(mentsuList);
        }

        
    }

    return (
        <div>
            {basePointList.map((point,idx)=>{
                return(
                    <Button variant="outlined" value={point} onClick={onClickPointButton}  key={idx}>{point}</Button>
                )
            })}
        </div>
    )
}
export default AnkanYao;