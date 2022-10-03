import {useState} from 'react';

function DiscountPannel(props) {
  return (
    <div className="flex flex-col">
      <div className="flex bg-black text-white text-center h-10 justify-center items-center rounded-t-xl">
        <h2 className="flex  text-white text-center items-center justify-center">
          Add $100 to save 10%
        </h2>
      </div>
      <div className="flex flex-col bg-stone-200 px-7 py-3.5 ">
        <div className="flex flex-row justify-between text-lg font-medium">
          <div className="">
            <h3 className="">Boundle Price</h3>
            <h3 className="font-bold text-2xl">${props.totalPrice}</h3>
          </div>
          <div className="">
            <h3 className="">Your Savings</h3>
            <h3 className="font-bold text-2xl">
              {props.totalPrice > 100 ? '$' + props.totalPrice / 10 : '$' + 0}
            </h3>
          </div>
        </div>
        <div className="bg-orange-100 flex flex-row mt-2 rounded-xl w-full">
          <div
            className={
              props.totalPrice > 100
                ? 'h-5 border-y-0 border-l-0 border  bg-zinc-500 border-black w-6/12 left-0 rounded-l-xl'
                : 'h-5 border-y-0 border-l-0 border  border-black w-6/12 bg-red '
            }
          ></div>
          <div className="h-5 border-y-0 border-l-0 border border-black w-3/12"></div>
          <div className="h-5 border-y-0 border-l-0 border border-black w-3/12"></div>
          <div className="h-5 border-y-0  border border-l-0  border-black w-3/12 mr-3"></div>
        </div>
        <div className="flex flex-row w-full font-bold text-base m-1.5">
          <div className="w-6/12 text-right	">10%</div>
          <div className="w-3/12 text-right	">15%</div>
          <div className="w-3/12 text-right	">20%</div>
          <div className="w-3/12 text-right	">25%</div>
        </div>
      </div>
    </div>
  );
}

export default DiscountPannel;
