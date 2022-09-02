import type { FC } from 'react'
import Shuntsu from './Shuntsu';
import Minko from './minkan/Minkan';
import Anko from './anko/Anko';
import Minkan from './minkan/Minkan';
import Ankan from './ankan/Ankan';

const Mentsu:FC=()=>{
    return (
        <div>
            <Shuntsu />
            <Minko />
            <Anko />
            <Minkan />
            <Ankan />
        </div>
    )
}
export default Mentsu;