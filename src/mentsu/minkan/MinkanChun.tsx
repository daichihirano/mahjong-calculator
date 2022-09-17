import type { FC } from 'react'
import { MentsuInterface } from '../../constance/Interface';
import MentsuButton from '../MentsuButton';

const MinkanChun:FC=()=>{
    const mentsuMinkanChun : MentsuInterface = {
        name:"明槓",
        type : "2~8",
        fu : 8
    };
    return (
        <MentsuButton mentsu={mentsuMinkanChun} />
    )
}
export default MinkanChun;