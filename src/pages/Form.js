import { useRef } from "react";
import { useParams } from "react-router-dom";
import Card from "../components/Card";

function Form(props) {
  const { specification } = useParams("specification");
  const formSpecification = JSON.parse(specification).jsonSpecification;

  const valueRefs = useRef([]);

  function submitHandler(event) {
    event.preventDefault();
    
    const data = [];
    
    valueRefs.current.map((v, index) => {
        return data.push(`{${formSpecification[index].key.default}: ${v.value}}`)
    })
  
  }

  return (
    <div>
      <Card>
        <section>
          <form className="form--custom" onSubmit={submitHandler}>
            {formSpecification.map((f, index) => (
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
              <button>Add Meetup</button>
            </div>
          </form>
        </section>

        {/* <form className="form--custom" onSubmit={submitHandler}>
          <div className="control--custom">
            <label htmlFor="title">Meetup Title</label>
            <input type="text" required id="title" ref={titleInputRef} />
          </div>
          <div className="control--custom">
            <label htmlFor="image">Meetup Image</label>
            <input type="url" required id="image" ref={imageInputRef} />
          </div>
          <div className="control--custom">
            <label htmlFor="address">Address</label>
            <input type="text" required id="address" ref={addressInputRef} />
          </div>
          <div className="control--custom">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              required
              rows="5"
              ref={descriptionInputRef}
            ></textarea>
          </div>
          <div className="actions">
            <button>Add Meetup</button>
          </div>
        </form> */}
      </Card>
    </div>
  );
}

export default Form;
