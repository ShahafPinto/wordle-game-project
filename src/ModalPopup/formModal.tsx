import Modal from 'react-bootstrap/Modal';
import { HeadContext } from '../providers/headContext';
import { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from 'react'


function FormModal() {
    const [username, setUsername] = useState('');
    // const [isDisabled, setIsDisabled] = useState(true);

    const appContext = useContext(HeadContext);
    // const inputname = useRef('inputUserName');

    const handleClose = ()=> {
        appContext?.setShowForm(false)};
    const handleChangeUsername=(event:any)=> {
        console.log(event)
        // setUsername(event.target.toLowerCase());
        }
    
    const handleSubmit=()=>{
        console.log('submit')
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
                    // ref='inputUserName'
                    id="username-input"
                    type="text"
                    // onChange={}
                    // onChange={handleChangeUsername}
                    // value={username}
                    />
                </div>
                <button id="login-button" type="submit">
                    Submit
                </button>
            </form>
        </Modal.Body>
    </Modal>
       
                {/* <div className="modal fade" id="modalLoginForm" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel"
                    aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                        <div className="modal-header text-center">
                            <h4 className="modal-title w-100 font-weight-bold">Sign in</h4>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body mx-3">
                            <div className="md-form mb-5">
                            <i className="fas fa-envelope prefix grey-text"></i>
                            <input type="email" id="defaultForm-email" className="form-control validate" />
                            <label data-error="wrong" data-success="right" htmlFor='defaultForm-email'>Your email</label>
                            </div>

                            <div className="md-form mb-4">
                            <i className="fas fa-lock prefix grey-text"></i>
                            <input type="password" id="defaultForm-pass" className="form-control validate"/>
                            <label data-error="wrong" data-success="right" htmlFor="defaultForm-pass">Your password</label>
                            </div>

                        </div>
                        <div className="modal-footer d-flex justify-content-center">
                            <button className="btn btn-default">Login</button>
                        </div>
                        </div>
        </div>
        </div>

        <div className="text-center">
        <a href="" className="btn btn-default btn-rounded mb-4" data-toggle="modal" data-target="#modalLoginForm">Launch
            Modal Login Form</a>
        </div> */}
    </>
  );
}

export default FormModal;