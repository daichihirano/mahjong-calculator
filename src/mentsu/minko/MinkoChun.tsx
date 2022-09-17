import type { FC } from 'react'
import { MentsuInterface } from '../../constance/Interface';
import MentsuButton from '../MentsuButton';

const MinkoChun:FC=()=>{
    const mentsuMinkoChun : MentsuInterface = {
        name:"明刻",
        type : "2~8",
        fu : 2
    };
    return (
        <MentsuButton mentsu={mentsuMinkoChun} />
    )
}
export default MinkoChun;