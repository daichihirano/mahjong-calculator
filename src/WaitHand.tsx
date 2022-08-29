import React, {useContext} from 'react'
import type { FC } from 'react'
import { Button } from '@mui/material';

import { waitContext } from './context/Context'

const WaitHand:FC=()=>{
    const {wait, setWait} = useContext(waitContext);

    const onClickWait=(e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
        setWait(Number(e.currentTarget.value));
    }
    return (
        <div>
            <Button variant="outlined" value={0} onClick={onClickWait}>両面</Button>
            <Button variant="outlined" value={0} onClick={onClickWait}>シャボ</Button>
            <Button variant="outlined" value={2} onClick={onClickWait}>ペンチャン</Button>
            <Button variant="outlined" value={2} onClick={onClickWait}>カンチャン</Button>
            <Button variant="outlined" value={2} onClick={onClickWait}>単騎</Button>
            <Button variant="outlined" value={2} onClick={onClickWait}>ノベタン</Button>
        </div>
    )
}
export default WaitHand;