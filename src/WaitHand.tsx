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

interface Wait {
    name : string;
    fu : number;
}

const WaitHand:FC=()=>{
    const {wait, setWait} = useContext(waitContext);
    const {subPoint, setSubPoint} = useContext(subPointContext);
    const {sumSubPoint, setSumSubPoint} = useContext(sumSubPointContext);
    const {mentsuList, setMentsuList} = useContext(mentsuListContext);
    const {head, setHead} = useContext(headContext);

    

    const onClickWait=(e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
        const selectWait:Wait ={
            name : e.currentTarget.name,
            fu : Number(e.currentTarget.value)
        }

        setWait(selectWait);

        var totalSubPoint:number = 25;
        if(subPoint.fu !== 25){
            totalSubPoint = 20 + subPoint.fu + head.fu + (Number(e.currentTarget.value)) +
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
            <Button variant="outlined" value={0} name={"両面"} onClick={onClickWait}>両面</Button>
            <Button variant="outlined" value={0} name={"シャボ"} onClick={onClickWait}>シャボ</Button>
            <Button variant="outlined" value={2} name={"ペンチャン"} onClick={onClickWait}>ペンチャン</Button>
            <Button variant="outlined" value={2} name={"カンチャン"} onClick={onClickWait}>カンチャン</Button>
            <Button variant="outlined" value={2} name={"単騎"} onClick={onClickWait}>単騎</Button>
            <Button variant="outlined" value={2} name={"ノベタン"} onClick={onClickWait}>ノベタン</Button>
        </div>
    )
}
export default WaitHand;