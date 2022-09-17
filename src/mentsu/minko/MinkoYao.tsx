import type { FC } from 'react'
import { MentsuInterface } from '../../constance/Interface';

import MentsuButton from '../MentsuButton';

const MinkoYao:FC=()=>{
    const mentsuMinkoYao : MentsuInterface = {
        name:"明刻",
        type : "1,9,字",
        fu : 4
    };
    return (
        <MentsuButton mentsu={mentsuMinkoYao} />
    )
}
export default MinkoYao;