import React, {useContext} from 'react'
import type { FC } from 'react'
import { Button } from '@mui/material';

import { subPointContext } from './context/Context'

const WinHand:FC=()=>{
    const {subPoint, setSubPoint} = useContext(subPointContext);

    const onClickTsumo=(e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
        setSubPoint(2);
    }
    const onClickRon=(e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
        setSubPoint(10);
    }
    const onClickChitoi=(e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
        setSubPoint(25);
    }
    const onClickNaki=(e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
        setSubPoint(0);
    }
    return (
        <div>
            <Button variant="outlined" onClick={onClickTsumo}>ツモ</Button>
            <Button variant="outlined" onClick={onClickRon}>メンゼンロン</Button>
            <Button variant="outlined" onClick={onClickChitoi}>七対子</Button>
            <Button variant="outlined" onClick={onClickNaki}>鳴き</Button>
        </div>
    )
}
export default WinHand;