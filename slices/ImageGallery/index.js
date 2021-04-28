import React, { useEffect, useState, useMemo } from "react";
import Credit from "../../components/Credit";
import { Canvas, useLoader } from "@react-three/fiber";
import {
  Physics,
  usePlane,
  useSphere,
  useBox,
  usePointToPointConstraint,
} from "@react-three/cannon";
import { TextureLoader } from "three";

const Ball = ({ position, fire, rid }) => {
  const [ref, api] = useSphere(() => {
    return {
      mass: 200,
      position: [4 - Math.random() * 8, 10, 0],
      args: 1,
    };
  });

  const color = useMemo(() => {
    const colors = ["#ff4411", "#00FF22", "#22AAFF", "#8800FF", "#2266FF"];
    return colors[Math.floor(Math.random() * colors.length)];
  }, [rid]);

  useEffect(() => {
    if (fire) {
      api.velocity.set(position.x * 10, position.y * 10, -20);
      api.position.set(0, 0, 14);
    }
  }, [fire, api, position]);

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[1, 16, 16]} />
      <meshLambertMaterial color={color} />
    </mesh>
  );
};

const BallPit = ({ position, ball }) => {
  const count = 200;
  const balls = new Array(count).fill(0).map((e, i) => {
    return (
      <Ball
        fire={ball === i}
        position={ball === i ? position : null}
        key={`ball-${i}`}
        rid={i}
      />
    );
  });
  return balls;
};

const Plane = ({ ...props }) => {
  usePlane(() => {
    return { ...props };
  });
  return null;
};

const Borders = () => {
  return (
    <group>
      <Plane
        name="bottom"
        position={[0, -10, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <Plane
        name="left"
        position={[-15, 0, 0]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <Plane
        name="right"
        position={[15, 0, 0]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <Plane name="rear" position={[0, 0, 0]} rotation={[0, 0, 0]} />
      <Plane name="front" position={[0, 0, 15]} rotation={[0, -Math.PI, 0]} />
    </group>
  );
};

const Picture = ({ image }) => {
  const boxSize = [15, 15, 2];
  const [ref, api] = useBox(() => {
    return { mass: 300, position: [0, 2, 6], args: boxSize };
  });
  const [refAttach] = useSphere(() => {
    return { type: "static", args: [0.25], position: [0, 10, 6] };
  });

  usePointToPointConstraint(ref, refAttach, {
    pivotA: [-0.3, 4, 0],
    pivotB: [-0.3, -3, 0],
  });

  usePointToPointConstraint(ref, refAttach, {
    pivotA: [0.3, 4, 0],
    pivotB: [0.3, -3, 0],
  });

  return (
    <mesh ref={ref}>
      <boxBufferGeometry args={boxSize} />
      <meshStandardMaterial map={image} />
    </mesh>
  );
};

const Pictures = ({ imageNum = 0, images }) => {
  const image = images[imageNum];
  return <Picture image={image} />;
};

const Scene = ({ imageUrls }) => {
  const [ball, setBall] = useState(false);
  const [position, setPosition] = useState(false);
  const [imageNum, setImageNum] = useState(0);

  const onClick = (e) => {
    console.log("Check");
    const pos = e.point.clone();
    pos.z = 0;
    setPosition(pos);
    setBall(Math.floor(Math.random() * 200));
    setImageNum((imageNum + 1) % imageUrls.length);
  };

  const images = useLoader(TextureLoader, imageUrls);

  return (
    <Physics
      gravity={[0, -50, 0]}
      defaultContactMaterial={{ restitution: 0.5 }}
    >
      <group position={[0, 0, -10]}>
        <mesh onClick={onClick} visible={false}>
          <planeGeometry
            args={[100, 100]}
            position={[0, 0, -1]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
        </mesh>
        <BallPit ball={ball} position={position} />
        <Pictures images={images} imageNum={imageNum} />
        <Borders />
      </group>
    </Physics>
  );
};

const MySlice = ({ slice }) => {
  let pixelRatio;
  let images = [];

  const imageUrls = slice.items.map((item) => item.image.url);
  useEffect(() => {
    if (window) {
      pixelRatio = window.devicePixelRatio;
    }
  }, []);

  return (
    <section className="relative flex h-screen py-24 text-gray-700 body-font">
      <Canvas
        shadows
        camera={{ position: [0, 0, 40], fov: 30 }}
        pixelRatio={Math.min(2, pixelRatio)}
      >
        <React.Suspense fallback={null}>
          <color attach="background" args={["#fcc"]} />
          <ambientLight intensity={0.3} />
          <directionalLight position={[30, 50, 25]} intensity={1} />
          <Scene imageUrls={imageUrls} />
        </React.Suspense>
      </Canvas>
    </section>
  );
};

export default MySlice;
