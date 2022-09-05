import React, {useContext} from 'react'
import type { FC } from 'react'
import { Button } from '@mui/material';

import { headContext } from './context/Context'

const Head:FC=()=>{
    const {head, setHead} = useContext(headContext);

    interface Head {
        name : string;
        fu : number;
    };

    const onClickHead=(e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
        const selectHead:Head ={
            name : e.currentTarget.name,
            fu : Number(e.currentTarget.value)
        }
        setHead(selectHead);
        console.log(head);
    }
    return (
        <div>
            雀頭は?
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