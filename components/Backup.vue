<template>
  <div class="canvasContainer">
    <canvas id="heroCanvas" ref="canvas" :width="this.width" :height="this.height"/>
  </div>
  <div class="cursor" :style="{ transform: 'translate(' + (x - 10) + 'px, ' + (y - 10) + 'px)' }"></div>
</template>

<script>

import {useMouse} from "@vueuse/core";

export default {
  data() {
    return {
      gl: null,
      program: null,
      positionBuffer: null,
      locations: {
        time: null,
        resolution: null,
        position: null,
        mouse: null
      },
      width: window.innerWidth,
      height: window.innerHeight,
      time: 1,
      x: useMouse().x,
      y: useMouse().y
    };
  },
  methods: {

    /**
     * Creates a WebGL shader from the provided GLSL source code.
     */
    createShader(type, source) {
      const shader = this.gl.createShader(type);
      this.gl.shaderSource(shader, source);
      this.gl.compileShader(shader);
      const success = this.gl.getShaderParameter(shader, this.gl.COMPILE_STATUS);
      if (success) {
        return shader;
      }
      console.log(this.gl.getShaderInfoLog(shader));
      this.gl.deleteShader(shader);
    },

    /**
     * Creates a WebGL program from the provided shaders
     */
    createProgram(vertexShader, fragmentShader) {
      const program = this.gl.createProgram();
      this.gl.attachShader(program, vertexShader);
      this.gl.attachShader(program, fragmentShader);
      this.gl.linkProgram(program);
      const success = this.gl.getProgramParameter(program, this.gl.LINK_STATUS);
      if (success) {
        return program;
      }
      console.log(this.gl.getProgramInfoLog(program));
      this.gl.deleteProgram(program);
    },

    /**
     * Does the initial work to set up the WebGL context and shaders
     */
    initWebGLComponent: function () {

      /* Step1: Prepare the canvas and get WebGL context */

      const canvas = document.getElementById('heroCanvas');
      this.gl = canvas.getContext('webgl');

      if (!this.gl) {
        return;
      }

      // Vertex shader source code
      const vertCode = `
      attribute vec4 position;

      varying vec2 fragCoord;

      void main() {
        gl_Position = vec4(position.xy, 0.0, 1.0);
        fragCoord = position.xy * 1.;
      }
      `;

      //Fragment shader source code
      const fragCode = `

      precision highp float;
      varying vec2 fragCoord;
      uniform vec2 iResolution;
      uniform float iTime;
      uniform vec2 iMouse;

      // Configuration
      #define NOISE_STRENGTH 0.06
      #define SPECULAR_STRENGTH 0.16
      #define ANIMATION_SPEED 0.3
      #define DEPTH 100.
      #define SEGMENT_QUALITY 1.4

      // Blob Effect
      float blob(vec3 q) {
          float f = DEPTH;
          f *= (cos(q.z * 1.1)) * (atan(q.x) + 0.2) * (cos(q.y * cos(q.z * 2.)) + 1.0) + cos(q.z * 5. + iTime * ANIMATION_SPEED) * cos(q.x) * sin(q.y) * (.6 + (iMouse.y * .1));
          return f;
      }

      // Gaussian Noise Effect
      float gaussian(float z, float u, float o) {
          return (1.0 / (o * sqrt(2.0 * 3.1415))) * exp(-(((z - u) * (z - u)) / (2.0 * (o * o))));
      }

      // Output
      void main(void) {

          // Basics
          vec2 ps = vec2(1.0) / iResolution.xy;
          vec2 uv = fragCoord * ps;
          gl_FragColor = vec4(0, 0, 0, 1.);

          vec2 p= -3. + 1.8 * fragCoord;
          vec3 o=vec3(p.x + 14. + (iMouse.x * 0.3), p.y + 2.7 - (iMouse.y * 0.2), -0.35);
          vec3 d=vec3(p.x*8.,p.y,1.)/128.;
          vec4 c=vec4(0.);
          float t = 0.;
          for (int i = 0;i < 180; i++)
          {
              if (blob(o + d * t) < 4.)
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
          gl_FragColor += vec4(.16, 0.05, .38, 1.) * 0.8;

          // Specular
          gl_FragColor += c * SPECULAR_STRENGTH * vec4(.40, 0.6, 0.9, 1);

          // Brightness
          gl_FragColor *= (t * .04);

          // Apply Noise
          float seed = dot(uv * vec2(1000.), vec2(12, 52));
          float noise = fract(sin(seed) * 43758.5453 + t);
          noise = gaussian(noise, float(0.0), float(0.5) * float(0.5));
          vec3 grain = vec3(noise) * (1.0 - gl_FragColor.rgb);
          gl_FragColor.rgb -= grain * NOISE_STRENGTH;

      }

      `;

      const vertexShader = this.createShader(this.gl.VERTEX_SHADER, vertCode);
      const fragmentShader = this.createShader(this.gl.FRAGMENT_SHADER, fragCode);

      // Create a shader program object to store combined shader program
      this.program = this.createProgram(vertexShader, fragmentShader);

      // Prepare the position attribute and buffer
      this.locations.position = this.gl.getAttribLocation(this.program, "position");
      this.positionBuffer = this.gl.createBuffer();
      this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.positionBuffer);
      const vertices = new Float32Array([-1.0, -1.0, 1.0, -1.0, -1.0, 1.0, 1.0, -1.0, 1.0, 1.0, -1.0, 1.0]);
      this.gl.bufferData(this.gl.ARRAY_BUFFER, vertices, this.gl.STATIC_DRAW);

      // Get the location of the time uniform
      this.locations.time = this.gl.getUniformLocation(this.program, "iTime");

      // Get the location of the resolution uniform
      this.locations.resolution = this.gl.getUniformLocation(this.program, "iResolution");

      // Get the location of the mouse uniform
      this.locations.mouse = this.gl.getUniformLocation(this.program, "iMouse");

    },

    /**
     * Updates the WebGL component on every "frame" of the animation.
     */
    renderWebGLComponent: function () {

      // Set the view port
      this.gl.viewport(0, 0, this.width, this.height);

      // Clear the canvas
      this.gl.clearColor(0, 0, 0, 0);
      this.gl.clear(this.gl.COLOR_BUFFER_BIT);

      // Enable the depth test
      this.gl.enable(this.gl.DEPTH_TEST);

      // Use the program
      this.gl.useProgram(this.program);

      // Handle the position buffer update
      this.gl.enableVertexAttribArray(this.locations.position);
      this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.positionBuffer);
      this.gl.vertexAttribPointer(this.locations.position, 2, this.gl.FLOAT, false, 0, 0);

      // Handle the time update
      this.time++;
      this.gl.uniform1f(this.locations.time, this.time * 0.01);

      // Handle the resolution
      this.gl.uniform2f(this.locations.resolution, this.width, this.height);

      // Handle the mouse position
      this.gl.uniform2f(this.locations.mouse, (1 / this.width) * this.x, (1 / this.height) * this.y);

      // Draw the vertices
      this.gl.drawArrays(this.gl.TRIANGLES, 0, 6);

      // All done
      requestAnimationFrame(this.renderWebGLComponent);

    }

  },
  mounted() {

    this.initWebGLComponent();
    requestAnimationFrame(this.renderWebGLComponent);

    addEventListener("resize", () => {
      this.width = window.innerWidth;
      this.height = window.innerHeight;
    });

  }
};
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

.cursor {
  width: 20px;
  height: 20px;
  position: absolute;
  z-index: 10;
  background-color: white;
  border-radius: 100%;
  top: 0;
  left: 0;
  backdrop-filter: grayscale(1);
  mix-blend-mode: difference;
  box-shadow: rgba(50, 50, 93, 0.25) 0 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
}

</style>
