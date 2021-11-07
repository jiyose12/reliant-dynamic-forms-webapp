import { useState } from "react";
import FormSpecificationList from "../components/form-specifications/FormSpecificationList";
import Backdrop from "../components/Backdrop";
import Modal from "../components/Modal";
const DUMMYDATA = [
  [
    {
      key: {
        id: 1,
        type: "integer",
        mutable: false,
        default: "static_key",
      },
      value: {
        id: 1,
        type: "integer",
        mutable: true,
      },
    },
    {
      key: {
        id: 2,
        type: "text",
        mutable: false,
        default: "static_key2",
      },
      value: {
        id: 2,
        type: "text",
        mutable: true,
      },
    },
  ],
  [
    {
      key: {
        id: 3,
        type: "text",
        mutable: false,
        default: "static_key3",
      },
      value: {
        id: 3,
        type: "text",
        mutable: true,
      },
    },
  ],
  [
    {
      key: {
        id: 4,
        type: "text",
        mutable: false,
        default: "static_key4",
      },
      value: {
        id: 4,
        type: "text",
        mutable: true,
      },
    },
  ],
];
function Home(props) {
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

        <FormSpecificationList jsonSpecifications={DUMMYDATA} />
      </div>
    </div>
  );
}

export default Home;
