import React from "react";

type Props = {
  children: React.ReactElement;
};

export default function Default({ children }: Props) {
  return (
    <>
      <div className="bg-[rgb(9,6,19)] text-white font-Jost scrollbar-thin z-0">
        <div>{children}</div>
      </div>
    </>
  );
}
