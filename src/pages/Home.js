import { useState, useEffect } from "react";
import FormSpecificationList from "../components/form-specifications/FormSpecificationList";
import Backdrop from "../components/Backdrop";
import Modal from "../components/Modal";
import DUMMYDATA from "../utils/DummySpecifications";

function Home(props) {
  const [showModal, setShowModal] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [jsonSpecifications, setJsonSpecifications] = useState([]);

  useEffect(() => {
    fetchJsonSpecifications();
  }, [setIsLoading, setJsonSpecifications]);

  function fetchJsonSpecifications() {
    setIsLoading(true);
    try{
    fetch("http://localhost:3000/key_value_pair_definitions/")
      .then((response) => {
        return response.json();
      }).then((data) => {
        let dataArray = [];
        
        for (const key in data) {
          const specification = {
            id: key,
            specification: [data[key]]
          };
          dataArray.push(specification);
        }
        setJsonSpecifications(dataArray);
      })
    } catch (erro) {
      console.log("Server error");
    } finally {
        setIsLoading(false);
      }
  }

  function showModalHandler() {
    setShowModal(true);
  }

  function closeModalHandler() {
    setShowModal(false);
  }

  if (isLoading) {
    return (
      <div>
        <p>Loading ...</p>
      </div>
    )
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

        <FormSpecificationList jsonSpecifications={jsonSpecifications} />
      </div>
    </div>
  );
}

export default Home;
