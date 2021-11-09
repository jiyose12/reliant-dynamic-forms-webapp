import { Link } from "react-router-dom";
import Card from "../Card";

function FormSpecification(props) {
  
  return (
    <Card>
      <Link to={`/${JSON.stringify(props.jsonSpecification)}/form`}>
        <section>
          {/* {props.jsonSpecification.specification[0].map((j) => (     */}
            {props.jsonSpecification.specification.map((j) => (   
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
                    {j.value.type && <p>{j.value.type}</p>}
                    {j.value.mutable && <p>{j.value.mutable}</p>}
                    {j.value.default && <p>{j.value.default}</p>}
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
