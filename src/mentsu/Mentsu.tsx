import type { FC } from 'react'
import Shuntsu from './Shuntsu';
import Minko from './minko/Minko';
import Anko from './anko/Anko';
import Minkan from './minkan/Minkan';
import Ankan from './ankan/Ankan';
import { Box } from '@mui/material';

const sxStyle ={
    display:'flex',
    flexDirection:'row',
    flexWrap:'wrap'
} as const;

const Mentsu:FC=()=>{
    return (
        <div>
            ⑤メンツを選んでください
            <Box sx={sxStyle}>
                <Shuntsu />
                <Minko />
                <Anko />
                <Minkan />
                <Ankan />
            </Box>
        </div>
    )
}
export default Mentsu;