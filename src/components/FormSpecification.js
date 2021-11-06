import { useState } from 'react';

import Backdrop from './Backdrop';
import Modal from './Modal';

function FormSpecification(props) {

  const [showModal, setShowModal] = useState();

  function showModalHandler() {
    setShowModal(true);
  }

  function closeModalHandler() {
    setShowModal(false);
  }
  return (
    <div>
      <div>{props.jsonSpecification}</div>
      <div>Code</div>
      <div className="actions">
        <button className="btn" onClick={showModalHandler}>
          Select
        </button>
      </div>
      {showModal && <Backdrop onClick={closeModalHandler} />}
      {showModal && <Modal jsonSpecification={props.jsonSpecification} onClose={closeModalHandler} />}
    </div>
  );
}

export default FormSpecification;
