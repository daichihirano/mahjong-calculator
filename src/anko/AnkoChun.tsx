import React, {useContext} from 'react'
import type { FC } from 'react'
import { Button } from '@mui/material';

import { subPointContext } from '../context/Context'

const AnkoChun:FC=()=>{
    

    var basePointList:Array<number> = [];
    for(var i:number = 0; i<=4; i++){
        basePointList.push(i);
    }



    return (
        <div>
            {basePointList.map((point,idx)=>{
                return(
                    <Button variant="outlined" value={point} key={idx}>{point}</Button>
                )
            })}
        </div>
    )
}
export default AnkoChun;