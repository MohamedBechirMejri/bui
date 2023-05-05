import { useCallback, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { motion as motion3d } from "framer-motion-3d";

export const Electric = ({
  children,
  color = "#3311fe",
  ...props
}: {
  color?: string;
  children: React.ReactNode;
}) => {
  const ref = useRef<HTMLDivElement>(null);

  // Create a custom shader material
  const lightningMaterial = new THREE.ShaderMaterial({
    uniforms: {
      color: { value: new THREE.Color(color) },
      time: { value: 0 },
      lightPosition: { value: new THREE.Vector3(0, 10, 0) }, // adjust this to match your light source
    },
    vertexShader: `
      uniform float time;
      uniform vec3 lightPosition;
      attribute float size;
      attribute vec3 customColor;
      varying vec3 vColor;
      varying float intensity;

      // A noise function to create a jagged shape
      float noise(vec2 p) {
        return fract(sin(dot(p ,vec2(12.9898,78.233))) * 43758.5453);
      }

      void main() {
        // Apply noise to the position based on time
        vec3 newPosition = position + normal * noise(position.xy + time) * 0.5;

        // Calculate the intensity based on the distance to the light source
        intensity = 1.0 - distance(newPosition, lightPosition) / 20.0;

        // Set the vertex color
        vColor = customColor;

        // Set the vertex size
        gl_PointSize = size * intensity;

        // Set the vertex position
        gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition,1.0);
      }
    `,
    fragmentShader: `
      uniform vec3 color;
      varying vec3 vColor;
      varying float intensity;

      void main() {
        // Mix the uniform color and the vertex color based on intensity
        gl_FragColor = vec4(color * vColor * intensity, intensity);
      }
    `,
  });

  // Create a point cloud for the lightning effect
  const lightningPoints = useMemo(() => {
    const geometry = new THREE.BufferGeometry();
    const positions = [];
    const colors = [];
    const sizes = [];
    const color = new THREE.Color();

    for (let i = 0; i < 100; i++) {
      // Generate random positions for the points
      positions.push((Math.random() - 0.5) * 10);
      positions.push((Math.random() - 0.5) * 10);
      positions.push((Math.random() - 0.5) * 10);

      // Generate random colors for the points
      color.setHSL(i / 100, 1.0, 0.5);
      colors.push(color.r, color.g, color.b);

      // Generate random sizes for the points
      sizes.push(20);
    }

    geometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(positions, 3)
    );
    geometry.setAttribute(
      "customColor",
      new THREE.Float32BufferAttribute(colors, 3)
    );
    geometry.setAttribute("size", new THREE.Float32BufferAttribute(sizes, 1));

    return geometry;
  }, []);

  // Animate the lightning effect by updating the time uniform
  const animateLightning = useCallback(
    (state: { clock: { getElapsedTime: () => any } }) => {
      const time = state.clock.getElapsedTime();
      lightningMaterial.uniforms.time.value = time;
    },
    []
  );

  return (
    <motion.div
      style={{
        appearance: "none",
        outline: "none",
        color: "#fff",
        fontFamily: "'Open Sans', Roboto, sans-serif",
        fontSize: "1rem",
        width: "max-content",
        height: "max-content",
        fontWeight: "bold",
        cursor: "pointer",
        position: "relative",
        userSelect: "none",
        borderRadius: "400px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        WebkitTapHighlightColor: "transparent",
      }}
    >
      <motion.div
        ref={ref}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          padding: "1em 2em",
          width: "max-content",
          height: "max-content",
          border: `3pxsolid ${color}`,
          borderRadius: "inherit",
          outline: "none",
          backdropFilter: "blur(10px)",
          x: "-50%",
          y: "-50%",
          textShadow: `0 0 20px ${color}`,
        }}
        initial={{ backgroundColor: color + "22" }}
        whileHover={{ backgroundColor: color + "44" }}
        whileTap={{ backgroundColor: color + "66" }}
        transition={{ duration: 0.2 }}
        layout
        {...props}
      >
        <motion.p>{children}</motion.p>
      </motion.div>
      <Canvas
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
          transform: "translate(-50%, -50%)",
        }}
      >
        <pointLight position={[0, 10, 0]} />
        <motion3d.points
          geometry={lightningPoints}
          material={lightningMaterial}
          // @ts-ignore
          onCreated={animateLightning}
        />
      </Canvas>
    </motion.div>
  );
};
