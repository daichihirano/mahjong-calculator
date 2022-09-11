import type { FC } from 'react'
import Shuntsu from './Shuntsu';
import Minko from './minko/Minko';
import Anko from './anko/Anko';
import Minkan from './minkan/Minkan';
import Ankan from './ankan/Ankan';
import { Box, Paper } from '@mui/material';

import { styled } from '@mui/system';

const sxStyle ={
    display:'flex',
    flexDirection:'row',
    flexWrap:'wrap'
} as const;

const StyledPaper = styled(Paper)({
    margin:'10px',
    padding:'10px',
    backgroundColor:'#E8DABE'
});


const Mentsu:FC=()=>{
    return (
        <StyledPaper>
            ⑤メンツを選んでください
            <Box sx={sxStyle}>
                <Shuntsu />
                <Minko />
                <Anko />
                <Minkan />
                <Ankan />
            </Box>
        </StyledPaper>
    )
}
export default Mentsu;