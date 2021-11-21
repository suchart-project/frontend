import React from "react";
export default function InputBox({ id,placholder,Name,type }) {
  return (
    <div>
      <label 
        className="block text-gray-700 text-sm font-bold mb-2" 
        for={id}>
        {Name}
      </label>
      <input 
        className="textbox" 
        id={id}
        type={type ? type : "text"}
        placeholder={placholder ? placholder:Name} />
    </div>
  );
}
