import React, {useContext} from 'react'
import type { FC } from 'react'
import { Button } from '@mui/material';

import { subPointContext } from '../context/Context'

import AnkoChun from './AnkoChun';
import AnkoYao from './AnkoYao';

const Anko:FC=()=>{
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
            <AnkoChun />
            1,9,字牌何個?
            <AnkoYao />
            
        </div>
    )
}
export default Anko;