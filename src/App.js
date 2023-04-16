import "./App.css";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const state = useSelector((state) => state.photo.data);
  return (
    <div className="App">
      {console.log(state)}
      <p>Click Here</p>
    </div>
  );
}

export default App;
