import Modal from 'react-bootstrap/Modal';
import { HeadContext } from '../providers/headContext';
import { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function FormModal() {
    
    const appContext = useContext(HeadContext);
    const handleClose = ()=> {
        appContext?.setShowForm(false)};
        const handleChangeUsername=(event:any)=> { //לעדכן טייפ של האיבנט
            const newValue = event.target.value;
            appContext?.setUsername(newValue);
        }
    
    const handleSubmit=(event:any)=>{ //לעדכן טייפ של האיבנט
        alert('A name was submitted: ' + appContext?.username)
    }
    
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
                    // value={appContext?.username}
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