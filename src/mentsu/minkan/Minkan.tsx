import React from 'react'
import type { FC } from 'react'

import MinkanChun from './MinkanChun';
import MinkanYao from './MinkanYao';

const Minko:FC=()=>{

    return (
        <div>
            明槓<br />
            2~8何個?
            <MinkanChun />
            1,9,字牌何個?
            <MinkanYao />
            
        </div>
    )
}
export default Minko;