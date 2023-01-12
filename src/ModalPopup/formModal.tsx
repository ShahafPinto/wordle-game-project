import Modal from 'react-bootstrap/Modal';
import { HeadContext } from '../providers/headContext';
import { FormEvent, useContext, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function FormModal() {
    const appContext = useContext(HeadContext);

    
    const handleClose = ()=> {
        appContext?.setShowForm(false)
    };
    const handleChangeUsername=(event:any)=> { //לעדכן טייפ של האיבנט
        const newValue = event.target.value;
        appContext?.setUsername(newValue);
    }
    
    const handleSubmit=(event:FormEvent)=>{
        // alert('A name was submitted: ' + appContext?.username)
        // event.preventDefault()
    }
    // useEffect(()=>{
    //     localStorage.setItem('name',JSON.stringify(appContext?.username));
    //   }, [appContext?.username])
    
    //   let value:string='';
    
    //   useEffect(()=>{
    //     const storageUserName:string|null = (localStorage.getItem('name'));
    //     if (storageUserName){
    //       value = JSON.parse(storageUserName);
    //       appContext?.setUsername(value);
    //       console.log(value)
    //     }
    //   },[])
    
  return (
    <>
    <Modal
        show={appContext?.showForm}
        onHide={handleClose}
        backdrop="static"
        // keyboard={false}
      >
        <Modal.Header closeButton >
          <Modal.Title>Log In
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username-input">user name: </label>
                    <input
                    id="username-input"
                    type="text"
                    onChange={handleChangeUsername}
                    // value={appContext?.inputName}
                    />
                </div>
                <input type="submit" value="submit" id="login-button" />
                    
            </form>
        </Modal.Body>
    </Modal>
    </>
  );
}

export default FormModal;