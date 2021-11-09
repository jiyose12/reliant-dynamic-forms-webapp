function Modal(props) {
  function addSpecificationHandler(specification) {
    try {
      fetch("http://localhost:3000/form_specification", {
        method: "POST",
        body: JSON.stringify(specification),
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (erro) {
      console.log("Server error");
    } finally {
      props.onClose();
    }
  }

  return (
    <div className="modal--custom container">
      <input type="text"></input>
      <p>{props.jsonSpecification}</p>
      <button className="btn btn--alt" onClick={props.onClose}>
        Cancel
      </button>
      <button className="btn" onClick={addSpecificationHandler}>
        Confirm
      </button>
    </div>
  );
}

export default Modal;
