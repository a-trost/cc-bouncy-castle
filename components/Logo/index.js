import React from "react";

function Icon({ width = 114, height = 89, ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 114 89"
      {...props}
    >
      <rect
        width="49.9"
        height="84.1"
        x="99"
        y="39.1"
        fill="#FFCE44"
        rx="3.7"
        transform="rotate(90 99 39.1)"
      ></rect>
      <rect
        width="19.6"
        height="45"
        x="87.1"
        y="35.9"
        fill="#4B77BB"
        rx="3.9"
      ></rect>
      <path
        fill="#57B57A"
        d="M95.4 17.7c.7-1 2.3-1 3 0l11.2 15.5c.9 1.2 0 3-1.5 3H85.7a1.9 1.9 0 01-1.5-3l11.2-15.5z"
      ></path>
      <rect
        width="19.6"
        height="45"
        x="7.3"
        y="35.9"
        fill="#4B77BB"
        rx="3.9"
      ></rect>
      <path
        fill="#57B57A"
        d="M15.6 17.7c.7-1 2.3-1 3 0l11.2 15.5c.9 1.2 0 3-1.5 3H5.9a1.9 1.9 0 01-1.5-3l11.2-15.5z"
      ></path>
      <path
        fill="#E9415F"
        d="M54.3 2.3a4.1 4.1 0 015.4 0l34 29.5A4.1 4.1 0 0191 39H23a4.1 4.1 0 01-2.7-7.2l34-29.5z"
      ></path>
      <rect
        width="8"
        height="99.4"
        x="106.7"
        y="81"
        fill="#57B57A"
        rx="3.7"
        transform="rotate(90 106.7 81)"
      ></rect>
    </svg>
  );
}

export default Icon;
