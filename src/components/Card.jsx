import React, { useEffect,useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Book from "./bookcomponent/Book";

export default function Card(props) {


  return (
    <div className="w-auto h-[300px] rounded-lg overflow-hidden shadow-lg">
      <img
        className="w-[350px] h-[300px]"
        src={`https://kuret-app-api.onrender.com/getimage/?name=${props.name}`}
        alt="Sunset in the mountains"
      />
    </div>
  );
}