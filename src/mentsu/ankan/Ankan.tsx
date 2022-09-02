import type { FC } from 'react'

import AnkanChun from './AnkanChun';
import AnkanYao from './AnkanYao';

import { Box } from '@mui/material';

const Ankan:FC=()=>{
    return (
        <div>
            暗刻<br />
            <Box sx={{display:'flex', flexDirection:'row'}}>
                <AnkanChun />
                <AnkanYao />
            </Box>    
        </div>
    )
}
export default Ankan;