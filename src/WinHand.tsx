import React, {useContext} from 'react'
import type { FC } from 'react'
import { Button } from '@mui/material';

import { subPointContext } from './context/Context'

const WinHand:FC=()=>{
    const {subPoint, setSubPoint} = useContext(subPointContext);

    const onClickWait=(e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
        setSubPoint(Number(e.currentTarget.value));
    }
    return (
        <div>
            <span >★押すな★</span>
            上がり方
            <span>★押したらページを更新★</span>
            <Button variant="outlined" value={2} onClick={onClickWait}>ツモ</Button>
            <Button variant="outlined" value={10} onClick={onClickWait}>メンゼンロン</Button>
            <Button variant="outlined" value={25} onClick={onClickWait}>七対子</Button>
            <Button variant="outlined" value={0} onClick={onClickWait}>鳴き</Button>
        </div>
    )
}
export default WinHand;