import FormValue from "./FormValue";

function FormValueList(props) {

  return (
    <div>
     <h1 className="title--topic">Form Value List</h1>
     {
         props.jsonValues.map((jsonValue) => (
             <FormValue 
             key={jsonValue[0].key.id}
             jsonValue={jsonValue}
             />
         ))
     }
    </div>
  );
}

export default FormValueList;