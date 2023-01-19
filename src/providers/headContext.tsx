import { createContext, SetStateAction } from "react";
import { Istorage } from "../tsx/useUser";

export interface IHeadContext{
    show: boolean,
    showForm: boolean,
    setShowInfo: React.Dispatch<SetStateAction<boolean>>, 
    handleShowInfo:()=>void,
    setShowForm: React.Dispatch<SetStateAction<boolean>>,
    handleFormShow:()=>void,
    username:Istorage,
    setUsername:React.Dispatch<SetStateAction<Istorage>>,
    getUsername: ()=>string,
    logOut: boolean,
    handleLogOut: ()=>void,
    logout:boolean
    
}

export const HeadContext =createContext<IHeadContext | null>(null); 
