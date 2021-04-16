import React, { useState, useEffect, useRef, useCallback } from "react";
import gsap from "gsap";
import Castle from "./Castle";

const MySlice = ({ slice }) => {
  const [value, setValue] = useState(0.33);
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
    <section className="castle-creator">
      <div className="container">
        <h2 className="h2">{slice.primary.heading[0].text}</h2>

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
          <Castle castleRef={castleRef} />
        </div>
        <div className="input-container">
          <label>
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
            <span>Desired Model</span>
          </label>
        </div>
      </div>
    </section>
  );
};

export default MySlice;
