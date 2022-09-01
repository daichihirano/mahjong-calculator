import React from 'react'
import type { FC } from 'react'

import MinkoChun from './MinkoChun';
import MinkoYao from './MinkoYao';

const Minko:FC=()=>{
    return (
        <div>
            明刻<br />
            2~8何個?
            <MinkoChun />
            1,9,字牌何個?
            <MinkoYao />        
        </div>
    )
}
export default Minko;