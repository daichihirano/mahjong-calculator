import type { FC } from 'react'

import MinkanChun from './MinkanChun';
import MinkanYao from './MinkanYao';

import { Box } from '@mui/material';

const Minkan:FC=()=>{

    return (
        <div>
            明刻<br />
            <Box sx={{display:'flex', flexDirection:'row'}}>
                <MinkanChun />
                <MinkanYao />
            </Box>    
        </div>
    )
}
export default Minkan;