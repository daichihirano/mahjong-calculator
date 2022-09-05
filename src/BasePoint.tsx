import React, {useContext, useState} from 'react'
import type { FC } from 'react'
import { Button } from '@mui/material';
import { pointContext } from './context/Context'
import { text } from 'stream/consumers';

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
        <div>
            何翻?
            {basePointList.map((point,idx)=>{
                return(
                    <Button variant='outlined' value={point} onClick={onClickPointButton}  key={idx}>{point}</Button>
                )
            })}
        </div>
    )
}
export default BasePoint;