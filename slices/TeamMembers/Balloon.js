import React from "react";
import { random, spline } from "@georgedoescode/generative-utils";

export default function Balloon({ index }) {
  const bodyWidth = random(80, 110);
  const bodyHeight = random(120, 130);
  const baseHue = random(0, 360);

  const color = `hsl(${baseHue}, 75%, 75%)`;
  const colorDark = `hsl(${baseHue}, 75%, 15%)`;
  const colorLight = `hsl(${baseHue}, 75%, 88%)`;
  const colorBlob = `hsl(${baseHue}, 75%, 92%)`;

  // Balloon Tie
  const tieSize = random(bodyWidth / 12, bodyWidth / 6);
  const tiePoints = [
    [tieSize / 2, 0],
    [tieSize, tieSize],
    [0, tieSize],
  ];
  const tiePathData = spline(tiePoints, 1, true);

  // Balloon String
  const numberOfStringPoints = random(3, 6, true);
  const stringHeight = 64;
  const stringPoints = [];

  for (let i = 0; i < numberOfStringPoints; i++) {
    stringPoints.push([random(-4, 4), stringHeight / (i + 1)]);
  }

  const stringPathData = spline(stringPoints, 1, false);

  // Shine
  const shineX = 100 - bodyWidth / 2;
  const shineY = random(100 - bodyWidth / 2, 100 + bodyWidth / 2);

  // Blob
  const blobPoints = random(8, 16, true);
  const blobRadius = random(70, 80);
  const angleStep = (Math.PI * 2) / blobPoints;
  const points = [];

  for (let i = 1; i < blobPoints; i++) {
    const theta = i * angleStep;
    const x = Math.cos(theta) * blobRadius + random(-5, 0);
    const y = Math.sin(theta) * blobRadius + random(-5, 0);
    points.push({ x, y });
  }

  const blobData = spline(points, 1, true);

  return (
    <svg viewBox="0 0 200 200">
      <defs>
        <mask id={`mask-${index}`}>
          <ellipse
            rx={bodyWidth / 2}
            ry={bodyHeight / 2}
            cx="100"
            cy="100"
            fill="#fff"
            stroke="#000"
          />
        </mask>
      </defs>
      <rect x="0" y="0" width="100%" height="100%" fill="white" />
      <path d={blobData} fill={colorBlob} transform="translate(100 100)" />
      <path
        d={stringPathData}
        stroke={colorDark}
        fill="none"
        transformOrigin="center center"
        transform={`translate(${100} ${100 + bodyHeight / 2 - 30 / 2})`}
      />
      <path
        d={tiePathData}
        fill={color}
        stroke={colorDark}
        transformOrigin="center center"
        transform={`translate(${100 - tieSize / 2} ${
          100 + bodyHeight / 2 - tieSize / 2
        })`}
      />

      <ellipse
        rx={bodyWidth / 2}
        ry={bodyHeight / 2}
        cx="100"
        cy="100"
        fill={color}
        stroke={colorDark}
      />
      <circle
        r={bodyWidth}
        cx={shineX}
        cy={shineY}
        fill={colorLight}
        mask={`url(#mask-${index})`}
      />
      <Eyes bodyWidth={bodyWidth} colorDark={colorDark} />
    </svg>
  );
}

const Eyes = ({ bodyWidth, colorDark }) => {
  const eyeCenterX = 100;
  const eyeCenterY = random(100 - 30, 100 + 30);
  const eyeRadius = 8;
  const eyeWidth = random(bodyWidth / 10, bodyWidth / 6);

  const eyeTransforms = ["0 4", "0 -4", "4 0", "-4 0"];
  const transform = random(eyeTransforms);

  return (
    <g>
      <circle
        r={eyeRadius}
        cx={eyeCenterX - eyeWidth}
        cy={eyeCenterY}
        fill="white"
        stroke={colorDark}
      />
      <circle
        r={eyeRadius}
        cx={eyeCenterX + eyeWidth}
        cy={eyeCenterY}
        fill="white"
        stroke={colorDark}
      />
      <circle
        r={eyeRadius / 2}
        cx={eyeCenterX - eyeWidth}
        cy={eyeCenterY}
        transform={`translate(${transform})`}
      />
      <circle
        r={eyeRadius / 2}
        cx={eyeCenterX + eyeWidth}
        cy={eyeCenterY}
        transform={`translate(${transform})`}
      />
    </g>
  );
};
