import type { FC } from 'react'

import MinkoChun from './MinkoChun';
import MinkoYao from './MinkoYao';
import { Box } from '@mui/material';

const Minko:FC=()=>{
    return (
        <div>
            明刻<br />
            <Box sx={{display:'flex', flexDirection:'row'}}>
                <MinkoChun />
                <MinkoYao />
            </Box>    
        </div>
    )
}
export default Minko;