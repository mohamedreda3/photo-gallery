import { useEffect, useState } from "react";
import "./App.css";
import { getPhotoes } from "./store/slices/photoesSlice";
import { useSelector, useDispatch } from "react-redux";
import { FaWindowClose } from "react-icons/fa";

function App() {
  const [photoView, setPhotoView] = useState(false);
  const [photoViewSrc, setPhotoViewSrc] = useState(null);

  const dispatch = useDispatch();
  const photoes = useSelector((state) => state.photo);
  useEffect(() => {
    dispatch(getPhotoes());
  }, [dispatch]);
  return (
    <div className="App">
      <nav>
        <h1>PHOTO GALLERY</h1>
        <p>This a photo gallery using redux-toolkit and redux-thunk</p>
      </nav>
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
                  onClick={() => {
                    setPhotoView(true);
                    setPhotoViewSrc(item.download_url);
                  }}
                />
              );
            })
          : null}
      </div>
      {photoView && photoViewSrc ? (
        <div className="slider">
          <span className="close" onClick={() => setPhotoView(false)}>
            <FaWindowClose />
          </span>
          <img src={photoViewSrc} alt="" />
        </div>
      ) : null}
    </div>
  );
}

export default App;
