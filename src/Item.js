import React, { Component } from "react";

const Item = (props) => {
  return (
    <div class="max-w-sm rouinderd overflow-hideen text-white shaddow-lg bg-gray-900">
      <div class="px-24 py-5 ">
        <p className="text-sm">{props.title}</p>
        <br></br>
        <img
          className="object-none object-center bg-gray-400 w-24 h-24"
          src={props.image}
        ></img>
      </div>
    </div>
  );
};

export default Item;
