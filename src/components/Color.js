import React from "react";

export default function Color({color}) {
  return (
    <>
      <div className='color' style={{background:`${color}`}} ></div>
    </>
  );
}
