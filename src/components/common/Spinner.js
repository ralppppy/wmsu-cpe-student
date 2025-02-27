import React from "react";

function Spinner() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      className="animate-spin  h-8 w-8"
    >
      <path
        fill="#444"
        d="M12.9 3.1C14.2 4.3 15 6.1 15 8c0 3.9-3.1 7-7 7s-7-3.1-7-7c0-1.9.8-3.7 2.1-4.9l-.8-.8C.9 3.8 0 5.8 0 8c0 4.4 3.6 8 8 8s8-3.6 8-8c0-2.2-.9-4.2-2.3-5.7l-.8.8z"
      ></path>
    </svg>
  );
}

export default Spinner;
