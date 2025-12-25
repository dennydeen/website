import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Book = ({ isMobile }) => {
  // Load the new 3D model
  const book = useGLTF("./book/scene.gltf");

  return (
    <mesh>
      {/* Adjusted Hemisphere Light */}
      <hemisphereLight intensity={3.0} groundColor="gray" skyColor="white" />

      {/* Spotlight with enhanced settings */}
      <spotLight
        position={[10, 15, 10]}
        angle={0.7}
        penumbra={1}
        intensity={2}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />

      {/* Additional Point Light for extra illumination */}
      <pointLight position={[-10, -10, -10]} intensity={0.5} />

      {/* Directional Light to simulate sunlight */}
      <directionalLight
        position={[0, 10, 0]}
        intensity={1}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />

      {/* Rendering the book model */}
      <primitive
        object={book.scene}
        scale={isMobile ? 0.025 : 0.06}
        position={isMobile ? [0, -0.325, -0.05] : [0, -1.1 , -0]}
        rotation={[-0.0, 0, -0.05]}
      />
    </mesh>
  );
};

const BookCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [5, 1.5, 8], fov: 30 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Book isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BookCanvas;
