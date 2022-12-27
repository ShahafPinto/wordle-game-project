import Modal from 'react-bootstrap/Modal';
import { HeadContext } from '../providers/headContext';
import { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function InfoModal() {
    const appContext = useContext(HeadContext);

    const handleClose = ()=> {
        appContext?.setShow(false)};

  return (
    <>
        <Modal
        show={appContext?.show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          I will not close if you click outside me. Don't even try to press
          escape key.
        </Modal.Body>
      </Modal>
    </>
  );
}

export default InfoModal;