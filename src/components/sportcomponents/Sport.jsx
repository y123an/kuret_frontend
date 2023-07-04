import React, { useEffect, useState } from "react";
import sportad from "../../assets/images/hawassa.jpg"
import Navbar from "../Navbar";
import SearchBar from "../SearchBar";
import Card from "../Card";
import Ad from "../Ad";
import Axios from "axios";
import Book from "../bookcomponent/Book";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function Sport() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 564, min: 0 },
      items: 1,
    },
  };
  const [newData, setNewData] = useState([]);
  const [trendingData, setTrendingData] = useState([]);
  const [bookImg, setBookImg] = useState();
  const [pagesss, setPage] = useState(true);

  useEffect(() => {
    Axios.get("https://kuret-app-api.onrender.com/getnewsportsdata")
      .then((res) => {
        setNewData(res.data)
      })
      .catch((err) => console.log(err, "it has an error"));

    Axios.get("https://kuret-app-api.onrender.com/gettrendingsportsdata")
      .then((res) => {
        res.data.forEach((element) => {
          const base64String = btoa(
            String.fromCharCode(...new Uint8Array(element.img.data.data))
          );

          setTrendingData((prev) => [...prev, base64String]);
        });
      })
      .catch((err) => console.log(err, "it has an error"));
  }, []);

  return pagesss ? (
    <div className="pb-32">
      <Navbar />
      <SearchBar />
      <Ad img={sportad} />
      <h1 className="text-2xl p-11">New</h1>
      <div className="new flex justify-center items-center">
        <Carousel
          responsive={responsive}
          showDots={true}
          containerClass="container"
          keyBoardControl={true}
          className=" w-[90%] p-16 bg-[#71BD26] rounded-lg " 
        >
          {newData.map((data, index) => {
            return (
              <div className="max-sm:w-[50%] max-sm:h-auto">
                <Card key={data._id} name={`sports/new/${data.name}`} />
                <button
                  type="submit"
                  onClick={() => {
                    setBookImg(data);
                    setPage(false);
                  }}
                  className="text-2xl ml-[40%] bg-yellow-400 p-1 mt-4 rounded-md text-white font-bold"
                >
                  Book
                </button>
              </div>
            );
          })}
        </Carousel>
      </div>

      <h1 className="text-2xl p-11">Trending</h1>
      <div className="trending flex justify-center items-center">
        <Carousel
          responsive={responsive}
          showDots={true}
          containerClass="container"
          className=" w-[90%] p-16   bg-[#71BD26] rounded-lg"
        >
          {trendingData.map((data, index) => {
            return (
              <div className="max-sm:w-[50%] max-sm:h-auto">
                 <Card key={data._id} name={`specials/trending/${data.name}`} />
                <button
                  onClick={() => {
                    setBookImg(data);
                    setPage(false);
                  }}
                  className="text-2xl ml-[40%] bg-yellow-400 p-1 mt-4 rounded-md text-white font-bold"
                >
                  Book
                </button>
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  ) : (
    <Book img={bookImg} />
  );
}
