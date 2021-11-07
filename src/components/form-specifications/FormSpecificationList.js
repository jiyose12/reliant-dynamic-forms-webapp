import FormSpecification from "./FormSpecification";

function FormSpecificationList(props) {

  return (
    <div>
     <h1 className="title--topic">Form Specification List</h1>
     {
         props.jsonSpecifications.map((jsonSpecification) => (
             <FormSpecification 
             key={jsonSpecification[0].key.id}
             jsonSpecification={jsonSpecification}
             />
         ))
     }
    </div>
  );
}

export default FormSpecificationList;
