import React, { useState } from "react";
import Payment from "../payment/Payment";
import Card from "../Card";

export default function Book(props) {
  const [price, setPrice] = useState(100);
  const [time, setTime] = useState();
  const [tn, settn] = useState();
  const [page, setPage] = useState(true);
  const img=props.data;



  return page ? (
    <div className="flex justify-center items-center">
    <div className= "w-[500px] p-10 rounded-md">
    <div className="flex items-center justify-center bg-slate-500  rounded-2xl">
      <div className="content flex flex-col">
        <div className="card flex justify-center items-center p-4">
          <Card name={props.data}/>       
        </div>
        <div className="ticket-discripion bg-slate-200 h-[500px] ">
          <form
            action=""
            className="flex flex-col gap-6 p-6 "
          >
            <h1>Time</h1>
            <div className="space-x-12">
            <label className="w-1/12">8:00</label>
            <input
              type="radio"
              name="time"
              value="8:00"
              onClick={(e) => {
                setTime(e.target.value);
              }}
            />
            </div>
            <div className="space-x-12">
            <label>10:00</label>
            <input
              type="radio"
              name="time"
              value="10:00"
              onClick={(e) => {
                setTime(e.target.value);
              }}
            />
            </div>
            <div className="space-x-4">
            <label>Number of tickets</label>
            <input
              type="number"
              onChange={(e) => {
                setPrice((prev) => 100 * e.target.value);
                settn(e.target.value);
              }}
              className="rounded-md p-3"
            />
            </div>

            <button
              type="submit"
              className="bg-blue-600 w-[40%] p-4 rounded-md"
              onClick={() => {
                setPage(!page)
              }}
            >
              Book
            </button>

            <div>
              Total <p className="text-green-600">{price} Birr </p>
            </div>
          </form>
        </div>
      </div>
    </div>
    </div>
    </div>
  ) : 
  (
    <Payment tn={tn} price={price} time={time}  img={img}/>
  );
}
