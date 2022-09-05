import React from 'react';

export const pointContext=React.createContext({} as{
    basePoint : number
    setBasePoint : React.Dispatch<React.SetStateAction<number>>
});

export const subPointContext=React.createContext({} as{
    subPoint : number
    setSubPoint : React.Dispatch<React.SetStateAction<number>>
});

interface Mentsu {
    name : string;
    type : string;
    fu : number;
}
interface Head {
    name : string;
    fu : number;
}
export const shuntsuContext=React.createContext({} as{
    shuntsu : Mentsu
    setShuntsu : React.Dispatch<React.SetStateAction<Mentsu>>
});

export const mentsuListContext=React.createContext({} as{
    mentsuList : Mentsu[]
    setMentsuList : React.Dispatch<React.SetStateAction<Mentsu[]>>
});

export const headContext=React.createContext({} as{
    head : Head
    setHead : React.Dispatch<React.SetStateAction<Head>>
});

export const waitContext=React.createContext({} as{
    wait : number
    setWait : React.Dispatch<React.SetStateAction<number>>
});