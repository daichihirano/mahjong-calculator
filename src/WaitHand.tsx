import React, {useContext} from 'react'
import type { FC } from 'react'
import { Button } from '@mui/material';

import { 
    waitContext,
    subPointContext,
    sumSubPointContext,
    mentsuListContext,
    headContext,
} from './context/Context'

const WaitHand:FC=()=>{
    const {wait, setWait} = useContext(waitContext);
    const {subPoint, setSubPoint} = useContext(subPointContext);
    const {sumSubPoint, setSumSubPoint} = useContext(sumSubPointContext);
    const {mentsuList, setMentsuList} = useContext(mentsuListContext);
    const {head, setHead} = useContext(headContext);

    const onClickWait=(e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
        setWait(Number(e.currentTarget.value));

        var totalSubPoint:number = 25;
        if(subPoint !== 25){
            totalSubPoint = 20 + subPoint + head.fu + (Number(e.currentTarget.value)) +
                mentsuList.map((mentsu)=>(
                  mentsu.fu
                )).reduce((sumFu, fu)=>(
                  sumFu += fu
                ),0);
            totalSubPoint = Math.ceil(totalSubPoint/10)*10;
        }
        setSumSubPoint(totalSubPoint);

    }

    return (
        <div>
            ③待ちの形を選んでください<br></br>
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