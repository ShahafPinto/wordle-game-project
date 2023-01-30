import Modal from 'react-bootstrap/Modal';
import { HeadContext } from '../providers/headContext';
import { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function FormModal() {
    const appContext = useContext(HeadContext);
    
    const handleClose = ()=> {
        appContext?.setShowForm(false)
    };
    const handleChangeUsername=(event:React.ChangeEvent<HTMLInputElement>)=> { 
        const newValue = event.target.value;
        appContext?.setUsername(newValue);
    }
    
  return (
    <>
    <Modal
        show={appContext?.showForm}
        onHide={handleClose}
        backdrop="static"
      >
        <Modal.Header closeButton >
          <Modal.Title>Log In
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <form>
                <div>
                    <label htmlFor="username-input">user name: </label>
                    <input
                    id="username-input"
                    type="text"
                    onChange={handleChangeUsername}
                    />
                </div>
                <input type="submit" value="submit" id="login-button" />
                    
            </form>
        </Modal.Body>
    </Modal>
    </>
  );
}
