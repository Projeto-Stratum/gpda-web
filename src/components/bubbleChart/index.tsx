import React from "react";
import { Pack, hierarchy } from "@visx/hierarchy";
import { ParentSize } from "@visx/responsive";
import Link from "next/link";
import { MembersPack } from "./types";

export default function MembersPack({ member }: { member: MembersPack[] }) {
  const pack = React.useMemo(
    () => ({
      children: member,
      name: "root",
      radius: 0,
      distance: 0,
      tier: 0,
      linkUrl: "",
      imageUrl: "",
      github: "",
    }),
    [member]
  );

  const root = React.useMemo(
    () =>
      hierarchy(pack)
        .sum((d) => 1 + d?.tier)
        .sort((a, b) => (b.data.tier ?? 0) - (a.data.tier ?? 0)),
    [pack]
  );

  return (
    <ParentSize>
      {({ width = 800 }) => {
        return width < 10 ? null : (
          <div
            style={{
              width,
              height: width,
              position: "relative",
            }}
          >
            <style
              dangerouslySetInnerHTML={{
                __html: `

              .spon-link {
                transition: all .2s ease;
                transform: translate(-50%, -50%);
              }

              .spon-link:hover {
                z-index: 10;
                transform: translate(-50%, -50%) scale(1.1);
              }

              .spon-link:hover .spon-tooltip {
                opacity: 1;
              }
            `,
              }}
            />
            <Pack root={root} size={[width, width]} padding={width * 0.005}>
              {(packData) => {
                const circles = packData.descendants().slice(1); // skip first layer
                return (
                  <div>
                    {[...circles].reverse().map((circle, i) => {
                      const tooltipX = circle.x > width / 2 ? "left" : "right";
                      const tooltipY = circle.y > width / 2 ? "top" : "bottom";

                      return (
                        <Link
                          key={`circle-${i}`}
                          href={
                            circle.data.linkUrl ||
                            `https://github.com/${circle.data.github}`
                          }
                          className={
                            `spon-link ` +
                            `absolute shadow-lg bg-white rounded-full z-0`
                          }
                          target="_blank"
                          style={{
                            left: circle.x,
                            top: circle.y,
                            width: circle.r * 2,
                            height: circle.r * 2,
                          }}
                        >
                          <div
                            key={`circle-${i}`}
                            className={`absolute bg-no-repeat bg-center bg-contain rounded-full
                                    w-[95%] h-[95%] dark:w-[100.5%] dark:h-[100.5%]
                                    left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                                    `}
                            style={{
                              backgroundImage: `url(${
                                circle.data.imageUrl ||
                                `https://avatars0.githubusercontent.com/${
                                  circle.data.github
                                }?v=3&s=${Math.round(circle.r * 2)}`
                              })`,
                            }}
                          />
                          <div
                            className={`spon-tooltip absolute text-sm
                              bg-gray-800 text-white p-2 pointer-events-none
                              transform opacity-0
                              shadow-xl rounded-lg
                              flex flex-col items-center
                              ${
                                tooltipX == "left"
                                  ? `left-1/4 -translate-x-full`
                                  : `right-1/4 translate-x-full`
                              }
                              ${
                                tooltipY == "top"
                                  ? `top-1/4 -translate-y-full`
                                  : `bottom-1/4 translate-y-full`
                              }
                            `}
                          >
                            <p className={`whitespace-nowrap font-bold`}>
                              {circle.data.name}
                            </p>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                );
              }}
            </Pack>
          </div>
        );
      }}
    </ParentSize>
  );
}
