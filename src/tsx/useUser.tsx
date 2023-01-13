import React, { useEffect, useState } from 'react';
import { IHeadContext } from '../providers/headContext';

export interface Istorage {
    name : string 
}

function useUser():IHeadContext{
    const [show, setShowInfo] = useState(false);
    const [showForm,setShowForm] = useState(false);
    const handleShow = () => setShowInfo(true);
    const handleFormShow= ()=> setShowForm(true);
    
    const getUsername=()=>{
        const storageUserName:string|null = localStorage.getItem('name');
        if (storageUserName){
            return JSON.parse(storageUserName);
        }else{
            return 'guest'
        }   
         
    }
    
    const [username, setUsername] = React.useState<Istorage> (getUsername);
    
    useEffect(()=>{
        localStorage.setItem('name',JSON.stringify(username));
      }, [username])
    
    //   useEffect(()=>{
    //     console.log('here')
    //     const storageUserName:Istorage = {}
    //     storageUserName.name = window.localStorage.getItem('name');
    //     console.log(storageUserName)
    //     if (storageUserName !== null) setUsername(JSON.parse(storageUserName.name!))
    // },[])

    return (
        {   show,
            showForm,
            setShowInfo, 
            handleShow,
            setShowForm,
            handleFormShow,
            username,
            setUsername,
            getUsername
            
        }
      )
}

export default useUser;