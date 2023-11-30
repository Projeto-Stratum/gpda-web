import Image from "next/image";
import { useEffect, useState } from "react";

export default function InfiniteScroll({ items, direction = "left" }) {
  const [directionText, setDirectionText] = useState("");

  useEffect(() => {
    if (direction == "right") {
      return setDirectionText("animate-infinite-right-scroll");
    }
    setDirectionText("animate-infinite-left-scroll");
  }, [direction]);

  return (
    <div className="w-full inline-flex flex-nowrap overflow-hidden md:[mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)] [mask-image:_linear-gradient(to_right,transparent_0,_black_64px,_black_calc(100%-64px),transparent_100%)]">
      {Array.from({ length: 2 }).map((_, i) => (
        <ul
          key={i}
          x-ref="logos"
          className={`flex items-center justify-center md:justify-start [&_li]:mx-1 [&_img]:max-w-none ${directionText}`}
        >
          {items.map((_, i) => (
            <li key={i}>
              <div className="flex flex-col gap-6 justify-around items-center md:w-[360px]  w-[200px]">
                <div className="relative md:w-[200px] md:h-[200px] w-[124px] h-[124px] overflow-hidden ">
                  <Image
                    src="/assets/images/noiterocket.jpg"
                    alt="Logo GPDA"
                    width={1980}
                    height={1080}
                    className="absolute object-cover w-full h-full"
                  />
                </div>
                <div className="space-y-1 text-sm md:text-base">
                  <p className=" font-korataki">Cauli Vilela Ferrreira {i}</p>
                  <p className="opacity-80">Coordenador de Tecnologia</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
}
