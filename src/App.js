import { useEffect, useState } from "react";
import "./App.css";
import { getPhotoes } from "./store/slices/photoesSlice";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const [phs, setPhs] = useState([]);
  const dispatch = useDispatch();
  const photoes = useSelector((state) => state.photo);
  useEffect(() => {
    dispatch(getPhotoes());
    // setPhs([...photoes]);
  }, [dispatch]);
  return (
    <div className="App">
      <h1>PHOTO GALLERY</h1>
      <p>This a photo gallery using redux-toolkit and redux-thunk</p>
      
      {photoes.status == "loading" ? <div className="loader"></div> : null}
      
      <div className="image-container">
        {photoes.data.length > 0
          ? photoes.data.map((item, index) => {
              return (
                <img
                  loading="lazy"
                  src={item.download_url}
                  alt={item.author}
                  key={index}
                />
              );
            })
          : null}
      </div>
    </div>
  );
}

export default App;
