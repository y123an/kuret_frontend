import React from "react";

export default function Card(props) {


  return (
    <div className="w-auto h-auto overflow-hidden ">
      <img
        className="w-[350px] h-[300px] object-contain rounded-lg"
        src={`https://kuret-app-api.onrender.com/getimage/?name=${props.name}`}
        alt="Sunset in the mountains"
      />
    </div>
  );
}
