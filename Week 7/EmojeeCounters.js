import React, { useState, useEffect } from "react";
import Sad from './sad.png';
import Like from './like.png';
import Love from './Love.png'; // Assuming Love is another emoji image

function EmojeeCounter(props) {
  console.log("pic is ", props.pic);

  const [pic, setPic] = useState(Love); // Initialize with Love or any default
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("function called", props.pic);
    if (props.pic === "Love") setPic(Love);
    else if (props.pic === "Like") setPic(Like);
    else if (props.pic === "sad") setPic(Sad);
  }, [props.pic]); // Dependency array ensures this runs only when props.pic changes

  const ClickHandle = () => {
    setCount(count + 1);
  };

  return (
    <div className="App">
      <p>
        {props.pic}
        <button onClick={ClickHandle}>
          {count}
          <img src={pic} alt="" /> 
        </button>
      </p>
    </div>
  );
}

export default EmojeeCounter;
