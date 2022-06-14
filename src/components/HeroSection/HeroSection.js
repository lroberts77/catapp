import "./HeroSection.css";
import { useEffect, useState } from "react";
import axios from "axios";
// import CircularProgress from '@mui/material/CircularProgress';

const HeroSection = () => {
  const [catdata, setCatdata] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const URL = "https://api.thecatapi.com/v1/images/search"

  const fetchCat = () => {
    axios
      .get(URL)
      .then((res) => res?.data)
      .then((data) => {
        console.log(data);
        setCatdata(data);

        if (catdata) {
          setIsLoading(false);
        }
      })
      .catch((err) => console.error(err));
  };

  const handleClick = () => {
    fetchCat();
    setIsLoading(false);
  };

  useEffect(() => {
    setIsLoading(true);
    fetchCat();
  }, []);

  return (
    <div className="hero-container">
      <div className="btn-cr">
      <button className="new-cat-btn" onClick={() => handleClick()}>
        get random cat
      </button>
      </div>
      <div className="hero-img-cr">
        <img className="img" src={catdata[0]?.url} alt="cats" />

      </div>
      <div className="text-cr">cat id: {catdata[0]?.id}</div>
    </div>
  );
};

export default HeroSection;
