import React from "react";

function Modal({ setIsOpen }) {
  React.useEffect(() => {
    console.log("Modal open");
    return () => {
      console.log("Modal closed");
    };
  }, []);
  return (
    <div className="flex justify-center items-center h-screen">
      <div className=" relative w-[200px] h-[100px] bg-gray-500 border border-red-300 rounded-md">
        Modal
        <button
          onClick={() => setIsOpen(false)}
          className="absolute right-2 cursor-pointer text-xl text-red-500"
        >
          x
        </button>
      </div>
    </div>
  );
}

export default Modal;
