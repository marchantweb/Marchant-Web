<template>
  <canvas id="heroCanvas" ref="canvas" :width="width" :height="height"/>
</template>

<script setup>

// Imports
import {useMouse, useWindowSize} from "@vueuse/core";
import {createShader, createProgram} from "~/shaders/shaderHelpers";
import fragment from "~/shaders/hero/fragment.js";
import vertex from "~/shaders/hero/vertex.js";
import {gsap} from "gsap";

// Non-reactive WebGL variables
let gl = null;
let program = null;
let positionBuffer = null;
const locations = {
  time: null,
  resolution: null,
  position: null,
  mouse: null,
  verticalOffset: null
};
let time = 0;
let then = Date.now();

// Reactive WebGL variables
const {width, height} = useWindowSize();
const {x, y} = useMouse();

let outputX = ref(x.value);
let outputY = ref(y.value);

gsap.ticker.add(() => {
  const dt = 0.05 * gsap.ticker.deltaRatio();
  outputX.value += (x.value - outputX.value) * dt;
  outputY.value += (y.value - outputY.value) * dt;
});

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

  // Create the shaders
  const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertex);
  const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragment);

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

  // Get the location of the vertical offset uniform
  locations.verticalOffset = gl.getUniformLocation(program, "iVerticalOffset");

}

/**
 * Updates the WebGL component on every "frame" of the animation.
 */
const renderWebGLComponent = () => {

  // Check the frame rate
  let now = Date.now();
  let delta = now - then;

  // Only render if at least 16.67ms (60fps max) has passed
  if (delta > (1000 / 60)) {

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
    gl.uniform2f(locations.mouse, (1 / width.value) * outputX.value, (1 / height.value) * outputY.value);

    // Pass the vertical offset uniform
    gl.uniform1f(locations.verticalOffset, verticalOffset.value);

    // Draw the vertices
    gl.drawArrays(gl.TRIANGLES, 0, 6);

  }

  // Update delta for last frame rate check
  then = Date.now() - (then % (1000 / 60))


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

/**
 * Animate the vertical offset based on the current route.
 * Only the index gets the full hero animation, other routes get the subdued background.
 * @type {*}
 */
const route = useRoute();
let verticalOffset = ref(route.path === '/portfolio' ? 1 : 0);
watch(route, (route) => {
  if (route["path"] === "/portfolio") {
    gsap.to(verticalOffset, {
      duration: 6,
      value: 1,
      ease: "power1.inOut"
    });
  } else {
    gsap.to(verticalOffset, {
      duration: 6,
      value: 0,
      ease: "power1.inOut"
    });
  }
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
  z-index: -1;
  // clip-path: polygon(0 0, 100% 0, 100% 50%, 0 70%);
}

</style>
