import React from "react";
export default function Modal({ id,placholder,Name,type }) {
  return (
    <div>
      <label 
        class="block text-gray-700 text-sm font-bold mb-2" 
        for={id}>
        {Name}
      </label>
      <input 
        class="textbox" 
        id={id}
        type={type ? type : "text"}
        placeholder={placholder ? placholder:Name} />
    </div>
  );
}
