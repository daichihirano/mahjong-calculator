import type { FC } from 'react'

import AnkoChun from './AnkoChun';
import AnkoYao from './AnkoYao';

import { Box } from '@mui/material';

const Anko:FC=()=>{
    return (
        <div>
            暗刻<br />
            <Box sx={{display:'flex', flexDirection:'row'}}>
                <AnkoChun />
                <AnkoYao />
            </Box>    
        </div>
    )
}
export default Anko;