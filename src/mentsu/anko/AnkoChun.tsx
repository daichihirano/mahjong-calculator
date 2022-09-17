import type { FC } from 'react'
import { MentsuInterface } from '../../constance/Interface';
import MentsuButton from '../MentsuButton';

const AnkoChun:FC=()=>{
    const mentsuAnkoChun : MentsuInterface = {
        name:"暗刻",
        type : "2~8",
        fu : 4
    };
    return (
        <MentsuButton mentsu={mentsuAnkoChun} />
    )
}
export default AnkoChun;