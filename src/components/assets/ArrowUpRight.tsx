import React, { ReactElement, SVGProps } from "react";

interface ArrowUpRightProps extends SVGProps<SVGSVGElement> {
  color?: string;
}

const ArrowUpRight = ({
  color = "black",
  ...props
}: ArrowUpRightProps): ReactElement => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="50"
      height="50"
      viewBox="0 0 50 50"
      fill={color}
      {...props}
    >
      <path
        d="M17.9394 30.9394C17.5489 31.3299 17.5489 31.9631 17.9394 32.3536C18.3299 32.7441 18.9631 32.7441 19.3536 32.3536L17.9394 30.9394ZM33.6465 17.6465C33.6465 17.0942 33.1988 16.6465 32.6465 16.6465L23.6465 16.6465C23.0942 16.6465 22.6465 17.0942 22.6465 17.6465C22.6465 18.1988 23.0942 18.6465 23.6465 18.6465L31.6465 18.6465L31.6465 26.6465C31.6465 27.1988 32.0942 27.6465 32.6465 27.6465C33.1988 27.6465 33.6465 27.1988 33.6465 26.6465L33.6465 17.6465ZM19.3536 32.3536L33.3536 18.3536L31.9394 16.9394L17.9394 30.9394L19.3536 32.3536Z"
        fill="white"
      />
      <rect x="0.5" y="0.5" width="49" height="49" rx="24.5" stroke="white" />
    </svg>
  );
};

export default ArrowUpRight;
