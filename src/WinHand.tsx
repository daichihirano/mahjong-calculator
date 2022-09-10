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

interface Win {
    name : string;
    fu : number;
}

const WinHand:FC=()=>{
    const {wait, setWait} = useContext(waitContext);
    const {subPoint, setSubPoint} = useContext(subPointContext);
    const {sumSubPoint, setSumSubPoint} = useContext(sumSubPointContext);
    const {mentsuList, setMentsuList} = useContext(mentsuListContext);
    const {head, setHead} = useContext(headContext);

    const onClickWait=(e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
        const selectWin:Win ={
            name : e.currentTarget.name,
            fu : Number(e.currentTarget.value)
        }
        setSubPoint(selectWin);
       
        var totalSubPoint:number = 20;
        if((Number(e.currentTarget.value)) === 20){
            
        } else if((Number(e.currentTarget.value)) === 25){
            totalSubPoint = 25;
        } else {
            totalSubPoint = 20 + (Number(e.currentTarget.value)) + head.fu + wait.fu +
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
            <Button variant="outlined" value={2} name={"ツモ"} onClick={onClickWait}>ツモ</Button>
            <Button variant="outlined" value={10} name={"門前ロン"} onClick={onClickWait}>門前ロン</Button>
            <Button variant="outlined" value={0} name={"鳴きロン"} onClick={onClickWait}>鳴きロン</Button>
            <Button variant="outlined" value={25} name={"七対子"} onClick={onClickWait}>七対子</Button>            
            <Button variant="outlined" value={20} name={"平和"} onClick={onClickWait}>平和</Button>            
        </div>
    )
}
export default WinHand;