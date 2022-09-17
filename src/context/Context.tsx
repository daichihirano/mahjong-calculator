import React from 'react';
import { HeadInterface, MentsuInterface, WaitInterface, WinInterface } from '../constance/Interface';

export const pointContext=React.createContext({} as{
    basePoint : number
    setBasePoint : React.Dispatch<React.SetStateAction<number>>
});

export const subPointContext=React.createContext({} as{
    subPoint : WinInterface
    setSubPoint : React.Dispatch<React.SetStateAction<WinInterface>>
});

export const sumSubPointContext=React.createContext({} as{
    sumSubPoint : number
    setSumSubPoint : React.Dispatch<React.SetStateAction<number>>
});

export const shuntsuContext=React.createContext({} as{
    shuntsu : MentsuInterface
    setShuntsu : React.Dispatch<React.SetStateAction<MentsuInterface>>
});

export const mentsuListContext=React.createContext({} as{
    mentsuList : MentsuInterface[]
    setMentsuList : React.Dispatch<React.SetStateAction<MentsuInterface[]>>
});

export const headContext=React.createContext({} as{
    head : HeadInterface
    setHead : React.Dispatch<React.SetStateAction<HeadInterface>>
});

export const waitContext=React.createContext({} as{
    wait : WaitInterface
    setWait : React.Dispatch<React.SetStateAction<WaitInterface>>
});