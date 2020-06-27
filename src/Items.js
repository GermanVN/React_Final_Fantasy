import React, { Component } from "react";
import { useState, useEffect } from "react";
import Item from "./Item";

const Items = () => {
  const [items_array, setImages] = useState([]);
  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const data = await fetch("https://xivapi.com/Item");

    const items = await data.json();
    console.log(items.Results.length);
    setImages(items.Results);
  };

  let url_prefix = "https://xivapi.com";

  let mitems = "";

  mitems = items_array.map((element, key) => {
    if (element.Name === "") {
      console.log("Vacios");
    } else {
      return <Item title={element.Name} image={url_prefix + element.Icon} />;
    }
  });

  return (
    <div class="container mx-auto text-center content-center">
      <h1 className="text-2xl">Final Fantasy Items</h1>
      <br></br>
      <div class="grid grid-cols-4 gap-4 ">{mitems}</div>
    </div>
  );
};

export default Items;
