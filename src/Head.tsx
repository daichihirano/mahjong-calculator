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

interface Head {
    name : string;
    fu : number;
};

const Head:FC=()=>{
    const {wait, setWait} = useContext(waitContext);
    const {subPoint, setSubPoint} = useContext(subPointContext);
    const {sumSubPoint, setSumSubPoint} = useContext(sumSubPointContext);
    const {mentsuList, setMentsuList} = useContext(mentsuListContext);
    const {head, setHead} = useContext(headContext);

    const onClickHead=(e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
        const selectHead:Head ={
            name : e.currentTarget.name,
            fu : Number(e.currentTarget.value)
        }
        setHead(selectHead);

        var totalSubPoint:number = 25;
        if(subPoint !== 25){
            totalSubPoint = 20 + subPoint + Number(e.currentTarget.value) + wait +
                mentsuList.map((mentsu)=>(
                  mentsu.fu
                )).reduce((sumFu, fu)=>(
                  sumFu += fu
                ),0)
            totalSubPoint = Math.ceil(totalSubPoint/10)*10
        }
        setSumSubPoint(totalSubPoint);
    }
    return (
        <div>
            ④雀頭を選んでください<br></br>
            <Button variant="outlined" value={0} name={"数牌"} onClick={onClickHead}>数牌</Button>
            <Button variant="outlined" value={0} name={"オタ風"} onClick={onClickHead}>オタ風</Button>
            <Button variant="outlined" value={2} name={"自風"} onClick={onClickHead}>自風</Button>
            <Button variant="outlined" value={2} name={"場風"} onClick={onClickHead}>場風</Button>
            <Button variant="outlined" value={4} name={"自風+場風"} onClick={onClickHead}>自風+場風</Button>
            <Button variant="outlined" value={2} name={"三元牌"} onClick={onClickHead}>三元牌</Button>
        </div>
    )
}
export default Head;