import React, {useContext} from 'react'
import type { FC } from 'react'
import { Button } from '@mui/material';

import { headContext } from './context/Context'

const Head:FC=()=>{
    const {head, setHead} = useContext(headContext);

    const onClickHead=(e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
        setHead(Number(e.currentTarget.value));
        console.log(head);
    }
    return (
        <div>
            <Button variant="outlined" value={0} onClick={onClickHead}>数牌</Button>
            <Button variant="outlined" value={0} onClick={onClickHead}>オタ風</Button>
            <Button variant="outlined" value={2} onClick={onClickHead}>自風</Button>
            <Button variant="outlined" value={2} onClick={onClickHead}>場風</Button>
            <Button variant="outlined" value={4} onClick={onClickHead}>自風+場風</Button>
            <Button variant="outlined" value={2} onClick={onClickHead}>三元牌</Button>
        </div>
    )
}
export default Head;