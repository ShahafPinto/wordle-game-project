import { createContext, SetStateAction } from "react";

export interface IHeadContext{
    show: boolean,
    showForm: boolean,
    setShowInfo: React.Dispatch<SetStateAction<boolean>>, 
    handleShowInfo:()=>void,
    setShowForm: React.Dispatch<SetStateAction<boolean>>,
    handleFormShow:()=>void,
    setUsername:React.Dispatch<SetStateAction<string>>,
    getUsername: ()=>string,
    handleLogOut: ()=>void,
    logout:boolean
}

export const HeadContext =createContext<IHeadContext | null>(null); 
