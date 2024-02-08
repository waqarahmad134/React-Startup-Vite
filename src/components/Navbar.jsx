import React from "react";
import {
  error_toaster,
  success_toaster,
  warning_toaster,
} from "../utilities/Toaster";

export default function Navbar() {
  const handleToaster = () => {
    success_toaster("Sucess Toaster");
    warning_toaster("Warning Toaster");
    error_toaster("Error Toaster");
  };
  return (
    <>
      <button
        className="bg-black text-white rounded-md px-3 py-1"
        onClick={handleToaster}
      >
        Chk Toaster
      </button>
      <div>Navbar</div>
    </>
  );
}
