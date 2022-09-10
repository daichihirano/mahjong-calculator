import React from 'react';

export const pointContext=React.createContext({} as{
    basePoint : number
    setBasePoint : React.Dispatch<React.SetStateAction<number>>
});

export const subPointContext=React.createContext({} as{
    subPoint : Win
    setSubPoint : React.Dispatch<React.SetStateAction<Win>>
});

export const sumSubPointContext=React.createContext({} as{
    sumSubPoint : number
    setSumSubPoint : React.Dispatch<React.SetStateAction<number>>
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

interface Wait {
    name : string;
    fu : number;
}

interface Win {
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
    wait : Wait
    setWait : React.Dispatch<React.SetStateAction<Wait>>
});