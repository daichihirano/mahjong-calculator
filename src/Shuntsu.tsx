import React, {useContext} from 'react'
import type { FC } from 'react'
import { Button } from '@mui/material';
import { pointContext } from './context/Context'

const Shuntsu:FC=()=>{

    const {basePoint, setBasePoint} = useContext(pointContext);
    

    var basePointList:Array<number> = [];
    for(var i:number = 0; i<=4; i++){
        basePointList.push(i);
    }

    const onClickPointButton = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
         setBasePoint(Number(e.currentTarget.value));
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
export default Shuntsu;