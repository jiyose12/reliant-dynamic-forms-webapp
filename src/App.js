import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Form from "./pages/Form";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" exact element={<Home/>}/>
   
        <Route path="/:specification/form" exact element={<Form/>}/>
      </Routes>
    </div>
  );
}

export default App;
