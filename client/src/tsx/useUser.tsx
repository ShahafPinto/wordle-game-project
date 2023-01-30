import React, { useEffect, useState } from 'react';
import { IHeadContext } from '../providers/headContext';

function useUser():IHeadContext{
    const [showInfo, setShowInfo] = useState(false);
    const [showForm, setShowForm] = useState(false);
    const handleShowInfo = () => setShowInfo(true);
    const handleFormShow= ()=> {
        console.log('click')
        setShowForm(true);
    }
    let logOut:boolean = false;

    const getUsername=():string=>{
        const storageUserName:string|null = localStorage.getItem('name');
        if (storageUserName){
            if(JSON.parse(storageUserName)==='guest'){
                logOut=false
            }else{
                logOut=true 
            }
            return JSON.parse(storageUserName);
        }else{
            logOut=false
            return 'guest'
        }   
    }
    
    const [username, setUsername] = React.useState<string>(getUsername);
    
    useEffect(()=>{
        localStorage.setItem('name',JSON.stringify(username));
      }, [username])
    
    const [logout,setLogout] = useState(logOut);
    
    const handleLogOut=()=>{ 
        localStorage.removeItem('name')
        setLogout(false);
    }

    return (
        {   show: showInfo,
            showForm,
            setShowInfo, 
            handleShowInfo,
            setShowForm,
            handleFormShow,
            setUsername,
            getUsername,
            handleLogOut,
            logout
        }
      )
}

export default useUser;