function Modal(props) {
    return (
      <div className='modal--custom container'>
        <p>{props.jsonSpecification}</p>
        <button className='btn btn--alt' onClick={props.onClose}>
          Cancel
        </button>
        <button className='btn' onClick={props.onClose}>
          Confirm
        </button>
      </div>
    );
  }
  
  export default Modal;