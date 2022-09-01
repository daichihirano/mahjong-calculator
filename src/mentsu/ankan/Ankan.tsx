import React from 'react'
import type { FC } from 'react'

import AnkanChun from './AnkanChun';
import AnkanYao from './AnkanYao';

const Ankan:FC=()=>{

    return (
        <div>
            暗槓<br />
            2~8何個?
            <AnkanChun />
            1,9,字牌何個?
            <AnkanYao />
        </div>
    )
}
export default Ankan;