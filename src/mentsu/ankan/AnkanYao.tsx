import type { FC } from 'react'
import { MentsuInterface } from '../../constance/Interface';
import MentsuButton from '../MentsuButton';

const AnkanYao:FC=()=>{
    const mentsuAnkanYao : MentsuInterface = {
        name:"暗槓",
        type : "1,9,字",
        fu : 32
    };
    return (
        <MentsuButton mentsu={mentsuAnkanYao} />
    )
}
export default AnkanYao;