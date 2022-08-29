import React, {useContext} from 'react'
import type { FC } from 'react'
import { Button } from '@mui/material';

import { subPointContext } from '../context/Context'

import MinkanChun from './MinkanChun';
import MinkanYao from './MinkanYao';

const Minko:FC=()=>{
    const {subPoint, setSubPoint} = useContext(subPointContext);

    const onClickPinhu=(e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
        setSubPoint(20);
        console.log(subPoint);
    }
    const onClickChitoi=(e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
        setSubPoint(25);
        console.log(subPoint);
    }
    return (
        <div>
            2~8何個?
            <MinkanChun />
            1,9,字牌何個?
            <MinkanYao />
            
        </div>
    )
}
export default Minko;