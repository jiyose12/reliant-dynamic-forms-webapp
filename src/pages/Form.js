import { useRef } from "react";
import { useParams } from "react-router-dom";
import Card from "../components/Card";

function Form(props) {
  const { specification } = useParams("specification");
  const formSpecification = JSON.parse(specification);

  const valueRefs = useRef([]);

  function submitHandler(event) {
    event.preventDefault();

    const data = [];

    valueRefs.current.map((v, index) => {
      return data.push(`{${formSpecification[index].key.default}: ${v.value}}`);
    });
  }

  return (
    <div>
      <Card>
        <section>
          <form className="form--custom" onSubmit={submitHandler}>
            {/* {formSpecification.specification[0].map((f, index) => (
              <div key={f.key.id} className="control--custom"> */}
               {formSpecification.specification.map((f, index) => (
              <div key={f.key.id} className="control--custom">
                <label htmlFor={f.key.default}>{f.key.default}</label>
                <input
                  type={f.value.type === "integer" ? "number" : "text"}
                  required
                  id={f.key.default}
                  ref={(ref) => {
                    valueRefs.current[index] = ref;
                  }}
                />
              </div>
            ))}
            <div className="actions">
              <button>Add</button>
            </div>
          </form>
        </section>
      </Card>
    </div>
  );
}

export default Form;
