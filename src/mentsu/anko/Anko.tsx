import React from 'react'
import type { FC } from 'react'

import AnkoChun from './AnkoChun';
import AnkoYao from './AnkoYao';

const Anko:FC=()=>{
    return (
        <div>
            暗刻<br />
            2~8何個?
            <AnkoChun />
            1,9,字牌何個?
            <AnkoYao />
            
        </div>
    )
}
export default Anko;