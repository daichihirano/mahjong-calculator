import type { FC } from 'react'
import { MentsuInterface } from '../../constance/Interface';
import MentsuButton from '../MentsuButton';

const AnkanChun:FC=()=>{
    const mentsuAnkanChun : MentsuInterface = {
        name:"暗槓",
        type : "2~8",
        fu : 16
    };
    return (
        <MentsuButton mentsu={mentsuAnkanChun} />
    )
}
export default AnkanChun;