import React, { useState, useEffect, useRef, useCallback } from "react";
import gsap from "gsap";

const MySlice = ({ slice }) => {
  const [value, setValue] = useState(0);
  const [previousValue, setPreviousValue] = useState(null);
  const tlRef = useRef();

  const castleRef = useCallback((castle) => {
    if (!castle) return;
    const center = castle.querySelector("#center");
    const left = castle.querySelector("#room1");
    const right = castle.querySelector("#room2");
    const base = castle.querySelector("#base");

    gsap.set(castle, { opacity: 1 });
    gsap.set(base, { scaleX: 0, transformOrigin: "center" });

    tlRef.current = gsap.timeline({
      defaults: {
        duration: 2,
        transformOrigin: "center bottom",
        ease: "elastic.out(1, 0.3)",
      },
      paused: true,
    });

    tlRef.current
      .from(
        center,
        {
          scaleY: 0,
          scaleX: 0.7,
          duration: 1.5,
        },
        0.5
      )
      .to(
        base,
        {
          scaleX: 0.5,
          duration: 1,
          ease: "back.out(1.7)",
          transformOrigin: "center center",
        },
        0
      )
      .from(
        left,
        {
          scaleY: 0,
          scaleX: 0.7,
          duration: 1.5,
        },
        2.5
      )
      .to(
        base,
        {
          scaleX: 0.75,
          duration: 1,
          ease: "back.out(1.7)",
          transformOrigin: "right center",
        },
        2
      )
      .from(
        right,
        {
          scaleY: 0,
          scaleX: 0.7,
          duration: 1.5,
        },
        4.5
      )
      .to(
        base,
        {
          scaleX: 1,
          duration: 1,
          ease: "back.out(1.7)",
          transformOrigin: "left center",
        },
        4
      );
  }, []);

  useEffect(() => {
    if (tlRef.current) {
      if (previousValue < value) {
        gsap.to(tlRef.current, {
          progress: value,
          duration: 2,
          overwrite: true,
        });
      } else {
        gsap.to(tlRef.current, {
          progress: value,
          duration: 0.4,
          overwrite: true,
        });
      }
    }
  }, [value, tlRef]);

  const updateCastle = (newValue) => {
    setPreviousValue(value);
    setValue(newValue);
  };

  return (
    <section>
      <h2>{slice.primary.heading[0].text}</h2>

      <div>
        {/* {slice.items[current].title[0] ? (
          <h3>{slice.items[current].title[0].text} </h3>
        ) : (
          ""
        )} */}
        {/* {slice.items[current].description[0] ? (
          <p>{slice.items[current].description[0].text}</p>
        ) : (
          ""
        )} */}
        <svg
          id="CASTLE"
          viewBox="0 0 1000 400"
          overflow="visible"
          opacity="0"
          ref={castleRef}
        >
          <g id="room2">
            <g id="walls" fill="#4b77bb">
              <path d="M818 274.51v-84.78a7.57 7.57 0 00-7.68-7.45h-34.09a7.57 7.57 0 00-7.68 7.45v84.78zM634 189.73v84.78h49.5v-84.78a7.57 7.57 0 00-7.69-7.45h-34.17a7.57 7.57 0 00-7.64 7.45z"></path>
            </g>
            <g id="turret">
              <path
                fill="#ffce44"
                d="M818.04 274.05L867.54 274.05 867.54 156.75 818.04 156.75 818.04 189.27 818.04 274.05z"
              ></path>
              <path
                fill="#e9415f"
                d="M818 157h51.23a5.8 5.8 0 004.86-9.19l-26.48-35.7a6.1 6.1 0 00-9.72 0l-26.47 35.7a5.79 5.79 0 004.86 9.19z"
              ></path>
              <path
                fill="#ffd872"
                d="M824.55 159.55a2.84 2.84 0 012.88 2.79v106.12a2.89 2.89 0 01-5.77 0V162.34a2.84 2.84 0 012.89-2.79z"
              ></path>
              <path
                fill="#ffd872"
                d="M824.55 159.55a2.84 2.84 0 012.88 2.79v106.12a2.89 2.89 0 01-5.77 0V162.34a2.84 2.84 0 012.89-2.79z"
              ></path>
              <path
                fill="#ed687f"
                d="M816 151.39a2.74 2.74 0 01-.66-3.9l23.77-32a2.93 2.93 0 014-.64 2.74 2.74 0 01.66 3.9L820 150.76a2.94 2.94 0 01-4 .63z"
              ></path>
              <path
                fill="#ed687f"
                d="M816 151.39a2.74 2.74 0 01-.66-3.9l23.77-32a2.93 2.93 0 014-.64 2.74 2.74 0 01.66 3.9L820 150.76a2.94 2.94 0 01-4 .63z"
              ></path>
            </g>
            <g id="roof">
              <path
                fill="#e9415f"
                d="M776.23 182.43h31.51c9.56 0 14-11.55 6.67-17.56l-70.93-58.53a29.24 29.24 0 00-37 0l-70.93 58.53a9.62 9.62 0 00-3.63 7.47 10.09 10.09 0 0010.3 10.09h134z"
              ></path>
              <path
                fill="#ed687f"
                d="M643.57 173.42a2.93 2.93 0 01-4.06-.32 2.72 2.72 0 01.32-3.93l70.93-58.54a3 3 0 011.87-.66 2.9 2.9 0 012.19 1 2.74 2.74 0 01-.32 3.94z"
              ></path>
              <path
                fill="#ed687f"
                d="M643.57 173.42a2.93 2.93 0 01-4.06-.32 2.72 2.72 0 01.32-3.93l70.93-58.54a3 3 0 011.87-.66 2.9 2.9 0 012.19 1 2.74 2.74 0 01-.32 3.94z"
              ></path>
            </g>
          </g>
          <g id="room1">
            <g id="turret-2" data-name="turret">
              <path
                fill="#ffce44"
                d="M176.94 189.27L176.94 156.75 127.44 156.75 127.44 274.05 176.94 274.05 176.94 189.27z"
              ></path>
              <path
                fill="#ffd872"
                d="M170.44 159.55a2.84 2.84 0 00-2.88 2.79v106.12a2.88 2.88 0 005.76 0V162.34a2.84 2.84 0 00-2.88-2.79z"
              ></path>
              <path
                fill="#ffd872"
                d="M170.44 159.55a2.84 2.84 0 00-2.88 2.79v106.12a2.88 2.88 0 005.76 0V162.34a2.84 2.84 0 00-2.88-2.79z"
              ></path>
              <path
                fill="#e9415f"
                d="M178.66 157a5.8 5.8 0 004.87-9.19l-26.48-35.7a6.1 6.1 0 00-9.72 0l-26.47 35.7a5.79 5.79 0 004.86 9.19h52.94z"
              ></path>
              <path
                fill="#ed687f"
                d="M179 151.39a2.73 2.73 0 00.66-3.9l-23.77-32a2.93 2.93 0 00-4-.64 2.75 2.75 0 00-.66 3.9L175 150.76a3 3 0 002.34 1.16 2.88 2.88 0 001.66-.53z"
              ></path>
            </g>
            <g id="walls-2" fill="#4b77bb" data-name="walls">
              <path d="M226.44 274.51v-84.78a7.57 7.57 0 00-7.69-7.45h-34.13a7.57 7.57 0 00-7.68 7.45v84.78zM353.34 182.28h-34.13a7.57 7.57 0 00-7.68 7.45v84.78H361v-84.78a7.57 7.57 0 00-7.66-7.45z"></path>
            </g>
            <g id="roof-2" data-name="roof">
              <path
                fill="#e9415f"
                d="M321.28 182.43h31.51a10.11 10.11 0 0010.31-10.09 9.64 9.64 0 00-3.64-7.47l-70.93-58.53a29.23 29.23 0 00-37 0l-70.93 58.53c-7.28 6-2.9 17.56 6.66 17.56h134z"
              ></path>
              <path
                fill="#ed687f"
                d="M351.42 173.42a2.93 2.93 0 004.06-.32 2.73 2.73 0 00-.33-3.93l-70.93-58.54a2.94 2.94 0 00-1.86-.66 2.91 2.91 0 00-2.2 1 2.73 2.73 0 00.33 3.94z"
              ></path>
              <path
                fill="#ed687f"
                d="M351.42 173.42a2.93 2.93 0 004.06-.32 2.73 2.73 0 00-.33-3.93l-70.93-58.54a2.94 2.94 0 00-1.86-.66 2.91 2.91 0 00-2.2 1 2.73 2.73 0 00.33 3.94z"
              ></path>
            </g>
          </g>
          <g id="center">
            <g id="flags">
              <path
                id="flag"
                fill="#e9415f"
                d="M517.18 122.29L481.32 122.29 499.25 159.77 517.18 122.29z"
              ></path>
              <path
                id="flag-2"
                fill="#ffce44"
                d="M480.56 122.29L444.71 122.29 462.63 159.77 480.56 122.29z"
                data-name="flag"
              ></path>
              <path
                id="flag-3"
                fill="#ffce44"
                d="M553.8 122.29L517.95 122.29 535.87 159.77 553.8 122.29z"
                data-name="flag"
              ></path>
              <path
                id="flag-4"
                fill="#e9415f"
                d="M589.66 122.29L553.8 122.29 571.73 159.77 589.66 122.29z"
                data-name="flag"
              ></path>
              <path
                id="flag-5"
                fill="#e9415f"
                d="M444.67 123.33L408.81 123.33 426.74 160.81 444.67 123.33z"
                data-name="flag"
              ></path>
              <path
                fill="none"
                stroke="#e9415f"
                strokeMiterlimit="10"
                strokeWidth="4"
                d="M409.04 122.29L588.59 122.29"
              ></path>
            </g>
            <g id="turret-3" data-name="turret">
              <path
                fill="#57b57a"
                d="M588.59 109.65L588.59 110.17 588.59 122.29 588.59 139.21 588.59 271.97 636.46 271.97 636.46 109.65 588.59 109.65z"
              ></path>
              <path
                fill="#74be88"
                d="M629.24 267.35a3 3 0 002.79-3.11V117.38a2.8 2.8 0 10-5.57 0v146.86a3 3 0 002.78 3.11z"
              ></path>
              <path
                fill="#74be88"
                d="M629.24 267.35a3 3 0 002.79-3.11V117.38a2.8 2.8 0 10-5.57 0v146.86a3 3 0 002.78 3.11z"
              ></path>
              <path
                fill="#e9415f"
                d="M586.46 109.48h51.21a5.61 5.61 0 004.7-8.89l-25.61-34.53a5.9 5.9 0 00-9.4 0l-25.61 34.53a5.67 5.67 0 00-.42.66l-.1.21a4.84 4.84 0 00-.21.47l-.09.25c0 .15-.09.3-.13.45a2.38 2.38 0 000 .26 3.93 3.93 0 00-.06.48V104.51a3 3 0 00.06.42c0 .11.05.22.08.33s.06.21.1.32.08.23.13.34.07.18.11.27l.18.35c0 .07.08.12.12.18a5.62 5.62 0 001 1.23l.09.09.4.31.13.1c.15.1.29.19.44.27l.13.07a4.59 4.59 0 00.5.24 6 6 0 002.25.45z"
              ></path>
              <path
                fill="#ed687f"
                d="M633.17 103.68a2.84 2.84 0 003.88.61 2.65 2.65 0 00.64-3.77l-23-31a2.79 2.79 0 00-2.26-1.13 2.86 2.86 0 00-1.63.51 2.65 2.65 0 00-.63 3.77z"
              ></path>
              <path
                fill="#ed687f"
                d="M633.17 103.68a2.84 2.84 0 003.88.61 2.65 2.65 0 00.64-3.77l-23-31a2.79 2.79 0 00-2.26-1.13 2.86 2.86 0 00-1.63.51 2.65 2.65 0 00-.63 3.77z"
              ></path>
            </g>
            <g id="turret-4" data-name="turret">
              <path
                fill="#57b57a"
                d="M409.04 139.21L409.04 122.29 409.04 110.17 409.04 109.65 361.16 109.65 361.16 271.97 409.04 271.97 409.04 139.21z"
              ></path>
              <path
                fill="#74be88"
                d="M402.75 114.27a3 3 0 00-2.79 3.11v146.86a2.8 2.8 0 105.57 0V117.38a3 3 0 00-2.78-3.11z"
              ></path>
              <path
                fill="#74be88"
                d="M405.53 264.24a2.8 2.8 0 11-5.57 0V117.38a2.8 2.8 0 115.57 0z"
              ></path>
              <path
                fill="#e9415f"
                d="M408.57 109.48h1.67a6 6 0 002.28-.45 4.44 4.44 0 00.49-.24l.14-.07a3.87 3.87 0 00.43-.27l.13-.1a4.24 4.24 0 00.4-.31l.1-.09a5.62 5.62 0 001-1.23 1.08 1.08 0 00.11-.18 3.84 3.84 0 00.18-.35l.12-.27c.05-.11.09-.23.13-.34l.09-.33a3 3 0 00.08-.32c0-.14.05-.28.07-.42a2.13 2.13 0 000-.25 5 5 0 000-.67 1.64 1.64 0 000-.22 3.93 3.93 0 00-.06-.48l-.06-.26c0-.15-.08-.3-.12-.45l-.09-.25c-.06-.16-.14-.31-.21-.47l-.11-.21a4.59 4.59 0 00-.42-.66l-25.6-34.53a5.91 5.91 0 00-9.41 0l-25.6 34.53a5.6 5.6 0 004.7 8.89h49.54z"
              ></path>
              <path
                fill="#ed687f"
                d="M408.93 104.8a2.81 2.81 0 001.63-.51 2.64 2.64 0 00.63-3.77l-23-31a2.78 2.78 0 00-2.26-1.13 2.85 2.85 0 00-1.62.51 2.65 2.65 0 00-.64 3.77l23 31a2.81 2.81 0 002.26 1.13z"
              ></path>
              <path
                fill="#ed687f"
                d="M408.93 104.8a2.81 2.81 0 001.63-.51 2.64 2.64 0 00.63-3.77l-23-31a2.78 2.78 0 00-2.26-1.13 2.85 2.85 0 00-1.62.51 2.65 2.65 0 00-.64 3.77l23 31a2.81 2.81 0 002.26 1.13z"
              ></path>
            </g>
          </g>
          <g id="base" fill="none" strokeLinecap="round" strokeMiterlimit="10">
            <g id="floor">
              <path
                stroke="#e9415f"
                strokeWidth="31"
                d="M101.97 285.18L883.47 285.18"
              ></path>
              <path
                stroke="#ee708b"
                strokeWidth="4"
                d="M101.97 276.23L883.47 276.23"
                opacity="0.63"
              ></path>
            </g>
            <g id="floor-2" data-name="floor">
              <path
                stroke="#4b77bb"
                strokeWidth="31"
                d="M101.97 316.61L883.47 316.61"
              ></path>
              <path
                stroke="#76a2d6"
                strokeWidth="4"
                d="M103.44 309.76L884.94 309.76"
                opacity="0.56"
              ></path>
            </g>
            <g id="floor-3" data-name="floor">
              <path
                stroke="#57b57a"
                strokeWidth="31"
                d="M101.97 348.03L883.47 348.03"
              ></path>
              <path
                stroke="#8dc371"
                strokeWidth="4"
                d="M103.44 340.4L884.94 340.4"
                opacity="0.56"
              ></path>
            </g>
          </g>
          <g id="slide">
            <path
              id="middle"
              fill="#ffce44"
              d="M538.09 267.61a8.87 8.87 0 01-.16-1.69h-79.17a8.85 8.85 0 01-.15 1.69l-19.25 98.72h118z"
            ></path>
            <path
              id="left"
              fill="#e9415f"
              d="M458.61 267.61a8.85 8.85 0 00.15-1.69c0-4.57-3.54-8.63-8.61-9.46-5.69-.93-11.13 2.54-12.15 7.76l-.33 1.7-1.29 6.6-.82 4.21-4.42 22.66-.7 3.6-1.44 7.21-4.42 22.66-6.19 31.77a9 9 0 00-.16 1.7c0 4.57 3.55 8.62 8.62 9.46a11.63 11.63 0 001.85.15c5 0 9.39-3.27 10.3-7.92l.33-1.69z"
            ></path>
            <path
              id="right"
              fill="#e9415f"
              d="M574.19 343.67l-1.06-5.46-1-5.35-4.42-22.66-1.4-7.21-.7-3.6-4.42-22.66-1.41-7.21-.7-3.6-.33-1.7c-1-5.22-6.46-8.69-12.15-7.76a9.88 9.88 0 00-8.62 9.46 8.87 8.87 0 00.16 1.69l19.25 98.72.33 1.69c.91 4.65 5.32 7.92 10.29 7.92a11.76 11.76 0 001.86-.15c5.07-.83 8.62-4.89 8.61-9.46a9 9 0 00-.15-1.7z"
            ></path>
          </g>
        </svg>
      </div>
      <label>
        Desired Model
        <input
          type="range"
          name="slider"
          id="slider"
          step="0.33"
          min={0}
          max={1}
          value={value}
          onChange={(e) => updateCastle(e.target.value)}
        />
      </label>
    </section>
  );
};

export default MySlice;
