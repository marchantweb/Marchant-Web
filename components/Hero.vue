<template>
  <div class="canvasContainer">
    <canvas id="heroCanvas" ref="canvas" :width="width === Infinity ? window.innerWidth : width"
            :height="height === Infinity ? window.innerHeight : height"/>
  </div>
</template>

<script setup>

// Imports
import {useMouse, useWindowSize} from "@vueuse/core";
import {createShader, createProgram} from "~/shaders/shaderHelpers";

// Non-reactive WebGL variables
let gl = null;
let program = null;
let positionBuffer = null;
const locations = {
  time: null,
  resolution: null,
  position: null,
  mouse: null
};
let time = 0;

// Reactive WebGL variables
const {width, height} = useWindowSize();
const {x, y} = useMouse();

/**
 * Does the initial work to set up the WebGL context and shaders
 */
const initWebGLComponent = () => {

  // Set up the canvas and WebGL context
  const canvas = document.getElementById('heroCanvas');
  gl = canvas.getContext('webgl');
  if (!gl) {
    return;
  }

  // Vertex shader source code
  const vertCode = `attribute vec4 position;

      varying vec2 fragmentCoordinates;

      void main() {
        gl_Position = vec4(position.xy, 0.0, 1.0);
        fragmentCoordinates = position.xy * 1.;
      }`;

  //Fragment shader source code
  const fragCode = `

      precision highp float;
      varying vec2 fragmentCoordinates;
      uniform vec2 iResolution;
      uniform float iTime;
      uniform vec2 iMouse;

      // Configuration
      #define NOISE_STRENGTH 0.05
      #define SPECULAR_STRENGTH 0.2
      #define ANIMATION_SPEED 0.3
      #define DEPTH 100.
      #define SEGMENT_QUALITY 1.1

      // Blob Effect
      float blob(vec3 q) {
          float f = DEPTH;
          f *= (cos(q.z * 1.1)) * (atan(q.x) + 0.2) * (cos(q.y * cos(q.z * 2.)) + 1.0) + cos(q.z * 5. + iTime * ANIMATION_SPEED) * cos(q.x) * sin(q.y) * (.6 + (iMouse.y * .1));
          return f;
      }

      // Gaussian Noise Effect
      float gaussian(float z, float u, float o) {
          return (1.0 / (o * sqrt(4.0 * 3.1415))) * exp(-(((z - u) * (z - u)) / (2.0 * (o * o))));
      }

      // Output
      void main(void) {

          // Basics
          vec2 ps = vec2(1.0) / iResolution.xy;
          vec2 uv = fragmentCoordinates * ps;
          gl_FragColor = vec4(0, 0, 0, 1.);

          vec2 p= -3. + 1.8 * fragmentCoordinates;
          vec3 o=vec3(p.x + 14. + (iMouse.x * 0.1), p.y + 2.7 - (iMouse.y * 0.1), -0.35);
          vec3 d=vec3(p.x*8.,p.y,1.)/128.;
          vec4 c=vec4(0.);
          float t = 0.;
          for (int i = 0;i < 180; i++)
          {
              if (blob(o + d * t) < 6.)
              {
                  vec3 e = vec3(.01, .0, .0);
                  vec3 n = vec3(.0);
                  n.x = blob(o + d * t) - blob(vec3(o + d * t + e.xyy));
                  n.y = blob(o + d * t) - blob(vec3(o + d * t + e.yxy));
                  n.z = blob(o + d * t) - blob(vec3(o + d * t + e.yyx));
                  n = normalize(n);
                  c += max(dot(vec3(0.5 + (iMouse.x * 0.1), 2. - (iMouse.y * .1), -1), n), .0) + min(dot(vec3(3.0 - (iMouse.x * 0.1), 10.2, -11.), n), .1) * 0.1;
                  break;
              }
              t += SEGMENT_QUALITY;
          }

          // Base Color
          gl_FragColor += vec4(.16, 0.05, .38, 1.) * 1.;

          // Specular
          gl_FragColor += c * SPECULAR_STRENGTH * vec4(.40, 0.6, 0.9, 1);

          // Brightness
          gl_FragColor *= (t * .03);

          // Apply Noise
          float seed = dot(uv * vec2(1000.), vec2(12, 52));
          float noise = fract(sin(seed) * 43758.5453 + t);
          noise = gaussian(noise, float(0.0), float(0.5) * float(0.5));
          vec3 grain = vec3(noise) * (1.0 - gl_FragColor.rgb);
          gl_FragColor.rgb -= grain * NOISE_STRENGTH;

      } `;

  // Create the shaders
  const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertCode);
  const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragCode);

  // Create a shader program object to store combined shader program
  program = createProgram(gl, vertexShader, fragmentShader);

  // Prepare the position attribute and buffer
  locations.position = gl.getAttribLocation(program, "position");
  positionBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
  const vertices = new Float32Array([-1.0, -1.0, 1.0, -1.0, -1.0, 1.0, 1.0, -1.0, 1.0, 1.0, -1.0, 1.0]);
  gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

  // Get the location of the time uniform
  locations.time = gl.getUniformLocation(program, "iTime");

  // Get the location of the resolution uniform
  locations.resolution = gl.getUniformLocation(program, "iResolution");

  // Get the location of the mouse uniform
  locations.mouse = gl.getUniformLocation(program, "iMouse");

}

/**
 * Updates the WebGL component on every "frame" of the animation.
 */
const renderWebGLComponent = () => {

  // Set the view port
  gl.viewport(0, 0, width.value, height.value);

  // Clear the canvas
  gl.clearColor(0, 0, 0, 0);
  gl.clear(gl.COLOR_BUFFER_BIT);

  // Enable the depth test
  gl.enable(gl.DEPTH_TEST);

  // Use the program
  gl.useProgram(program);

  // Handle the position buffer update
  gl.enableVertexAttribArray(locations.position);
  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
  gl.vertexAttribPointer(locations.position, 2, gl.FLOAT, false, 0, 0);

  // Pass the time uniform
  time++;
  gl.uniform1f(locations.time, time * 0.01);

  // Pass the resolution uniform
  gl.uniform2f(locations.resolution, width.value, height.value);

  // Pass the mouse uniform
  gl.uniform2f(locations.mouse, (1 / width.value) * x.value, (1 / height.value) * y.value);

  // Draw the vertices
  gl.drawArrays(gl.TRIANGLES, 0, 6);

  // All done
  requestAnimationFrame(renderWebGLComponent);
}

/**
 * Initialize the WebGL background
 */
onMounted(() => {
    initWebGLComponent();
    requestAnimationFrame(renderWebGLComponent);
});

</script>

<style lang="scss" scoped>

canvas {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  object-fit: cover;
  // clip-path: polygon(0 0, 100% 0, 100% 50%, 0 70%);
}

</style>
