import React, { useState } from "react";
import readingImage from "./images/reading.avif";
import { Card } from "./Card";
import axios from "axios";

export const Main = () => {
  const [search, setSearch] = useState("");
  const [bookData, setData] = useState([]);
  const searchBook = (evt) => {
    if (evt.key === "Enter") {
      axios
        .get(
          "https://www.googleapis.com/books/v1/volumes?q=" +
            search +
            "&key=AIzaSyCLfvnrmXt0flzKsluUs1F4yC0dHJUrOrA" +
            "&maxResults=40"
        )
        .then((res) => setData(res.data.items))
        .catch((err) => console.log(err));
    }
  };

  const backgroundStyle = {
    width: "100%",
    height: "500px",
    color: "#d48996ff",
    boxShadow: "0 5px 10px #d48996ff",
    display: "flex",
    alignContent: "center",
    position: "relative",
  };

  return (
    <>
      <div className="header" style={backgroundStyle}>
        <div className="row1">
          <h1>
            Dive into the Pages of infinite Wonder,
            <br />
            <span style={{ paddingLeft: "20px" }}>
              Your Next Favorite Story Awaits
            </span>
          </h1>
        </div>

        <div className="row2">
          <h2>THE BOOK SHELF</h2>
          <div className="search">
            <input
              type="text"
              placeholder="Enter a Book Name"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={searchBook}
            />
            <button
              onClick={() => searchBook({ key: "Enter" })}
              style={{ cursor: "pointer" }}
            >
              <i className="fas fa-search"></i>
            </button>
          </div>
          <img src={readingImage} alt="" />
        </div>
      </div>

      <div className="container">{<Card book={bookData} />}</div>
    </>
  );
};
