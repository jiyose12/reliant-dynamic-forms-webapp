import { Link } from "react-router-dom";
import Card from "../Card";

function FormSpecification(props) {
  return (
    <Card>
      <Link to={`/${JSON.stringify(props)}/form`}>

        <section>
          {props.jsonSpecification.map((j) => (    
            <div key={j.key.id}>
              <div>
                <h5>Key</h5>
                {
                  <div>
                    {j.key.type && <p>{j.key.type}</p>}
                    {j.key.mutable && <p>{j.key.mutable}</p>}
                    {j.key.default && <p>{j.key.default}</p>}
                  </div>
                }
              </div>
              <div>
                <h5>Value</h5>
                {
                  <div>
                    <p>{j.value.type}</p>
                    <p>{j.value.mutable}</p>
                    <p>{j.value.default}</p>
                  </div>
                }
              </div>
            </div>
          ))}
        </section>
      </Link>
    </Card>
  );
}

export default FormSpecification;
