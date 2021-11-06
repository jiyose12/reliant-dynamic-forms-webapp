import { useState } from "react";
import FormSpecification from "./components/FormSpecification";
import Backdrop from "./components/Backdrop";
import Modal from "./components/Modal";

function App() {
  const [showModal, setShowModal] = useState();

  function showModalHandler() {
    setShowModal(true);
  }

  function closeModalHandler() {
    setShowModal(false);
  }
  return (
    <div>
      <div className="container--main container-fluid">
        <div className="d-flex justify-content-center">
          <button
            className="btn--specification-create"
            onClick={showModalHandler}
          >
            Create a new JSON form specification
          </button>
        </div>
        {showModal && <Backdrop onClick={closeModalHandler} />}
        {showModal && <Modal onClose={closeModalHandler} />}

        <h1 className="title--topic">Form Specification List</h1>
        <FormSpecification jsonSpecification="jsonTest1" />
        <FormSpecification jsonSpecification="jsonTeste2" />
      </div>
    </div>
  );
}

export default App;
