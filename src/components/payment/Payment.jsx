import React from "react";
import Card from "../Card";

export default function Paymet(props) {
  return (
    <div className="flex justify-center items-center">
    <div className="w-[60%] p-6 rounded-2xl flex  justify-center items-center ">
    <div className="bg-green-300 flex max-sm:flex-col">
      <div className="discription flex flex-col bg-gray-200 items-center justify-center max-md:flex-col p-3 gap-4 rounded-s-full">
        <div className="card flex items-center">
          <Card name={props.img}/>
        </div>
        <div className="info bg-gray-500 p-10 space-y-3 rounded-2xl">
          <h2 className="font-bold">Ticket Information</h2>
          <p>Price: {props.price} Birr</p>
          <p>Number of tickets: {props.tn}</p>
          <p>Time: {props.time}</p>
        </div>
      </div>
      <div>
      <h1 className="text-xl p-8">Payment Information</h1>
      <form action="" className="p-20 flex flex-col justify-start items-start space-y-4 ">
        <label>First Name</label>
        <input type="text" name="fname" className="w-auto h-[40px]" />
        <label>Last Name</label>
        <input type="text" name="lname" className="w-auto h-[40px]" />
        <p className="text-xl font-bold text-blue-500">Enter Your Bank Information</p>
        <label>Enter The Bank Name</label>
        <input type="text" name="bname" className="w-auto h-[40px]" />
        <label>Enter Your Card Number </label>
        <input type="text" name="cnumber" className="w-auto h-[40px]" />
        <button type="submit" className="w-[100px] bg-blue-500 p-4 rounded-lg hover:bg-yellow-300 relative left-[60%] text-white font-bold max-sm:w-[40%]">Pay</button>
      </form>
      </div>
    </div>
    </div>
    </div>
  );
}
