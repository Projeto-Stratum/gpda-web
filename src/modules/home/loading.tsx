import { useEffect, useRef } from "react";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.

  return (
    <div className="fixed animate-opacityOut  delay-500 top-0 bottom-0 left-0 right-0 z-[10000] flex items-center justify-center h-screen bg-black">
      <ul className="flex flex-col items-start text-3xl font-korataki">
        <div className="overflow-hidden">
          <li className="animate-translateDownUpY">GPDA</li>
        </div>
        <span className="pb-1 overflow-hidden">
          <li className="animate-translateUpDownY">Desenvolvimento</li>
        </span>
      </ul>
    </div>
  );
}
