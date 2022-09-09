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

const WinHand:FC=()=>{
    const {wait, setWait} = useContext(waitContext);
    const {subPoint, setSubPoint} = useContext(subPointContext);
    const {sumSubPoint, setSumSubPoint} = useContext(sumSubPointContext);
    const {mentsuList, setMentsuList} = useContext(mentsuListContext);
    const {head, setHead} = useContext(headContext);

    const onClickWait=(e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
        setSubPoint(Number(e.currentTarget.value));
       
        var totalSubPoint:number = 20;
        if((Number(e.currentTarget.value)) === 20){
            
        } else if((Number(e.currentTarget.value)) === 25){
            totalSubPoint = 25;
        } else {
            totalSubPoint = 20 + (Number(e.currentTarget.value)) + head.fu + wait +
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
            ②上がり方を選んでください<br></br>
            　七対子の場合は③～⑤はスキップ<br></br>
            <Button variant="outlined" value={2} onClick={onClickWait}>ツモ</Button>
            <Button variant="outlined" value={10} onClick={onClickWait}>メンゼンロン</Button>
            <Button variant="outlined" value={0} onClick={onClickWait}>鳴きロン</Button>
            <Button variant="outlined" value={25} onClick={onClickWait}>七対子</Button>            
            <Button variant="outlined" value={20} onClick={onClickWait}>ピンフ</Button>            
        </div>
    )
}
export default WinHand;