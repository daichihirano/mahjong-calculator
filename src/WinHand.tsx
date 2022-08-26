import React, {useContext} from 'react'
import type { FC } from 'react'
import { Button } from '@mui/material';

import { subPointContext } from './App'

const WinHand:FC=()=>{
    const {subPoint, setSubPoint} = useContext(subPointContext);

    const onClickPinhu=(e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
        setSubPoint(20);
        console.log(subPoint);
    }
    const onClickChitoi=(e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
        setSubPoint(25);
        console.log(subPoint);
    }
    return (
        <div>
            <Button variant="outlined" onClick={onClickPinhu}>ピンフツモ</Button>
            <Button variant="outlined" onClick={onClickChitoi}>七対子</Button>
        </div>
    )
}
export default WinHand;