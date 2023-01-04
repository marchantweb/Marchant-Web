<template>
  <div>
    <canvas id="canvas2D" width="512" height="512"></canvas>
    <canvas id="canvas3D" width="512" height="512"></canvas>
  </div>
</template>

<script>
export default {
  data() {
    return {
      context2D: null,
      xPosition: 50
    };
  },
  mounted() {
    this.drawCanvas2D();
    this.drawCanvas3D();
  },
  methods: {

    /**
     * Create an example 2D canvas and initWebGLComponent a red square to it
     * @returns {boolean}
     */
    drawCanvas2D() {
      this.context2D = document.getElementById('canvas2D').getContext('2d');
      this.context2D.clearRect(0, 0, 512, 512);
      this.context2D.fillStyle = '#fff41c';
      this.context2D.fillRect(this.xPosition, 50, 50, 50);
      if (this.xPosition < (512 - 100)) {
        this.xPosition++;
      } else {
        this.xPosition = 50;
      }

      window.requestAnimationFrame(this.drawCanvas2D);
    },

    drawCanvas3D() {
      const gl = document.getElementById('canvas3D').getContext('webgl');
      if (!gl) {
        return;
      }

      var vertexShaderSource = `
      attribute vec4 a_position;
attribute vec2 a_texcoord;

uniform mat4 u_matrix;

varying vec2 v_texcoord;

void main() {
   gl_Position = u_matrix * a_position;
   v_texcoord = a_texcoord;
}
`;

      var fragmentShaderSource = `
      precision mediump float;

varying vec2 v_texcoord;

uniform sampler2D u_texture;

void main() {
   vec4 color = texture2D(u_texture, v_texcoord);
   gl_FragColor = vec4(1.0 - color.rgb, color.a);
}
`;

      // setup GLSL program
      var program = webglUtils.createProgramFromSources(gl, [vertexShaderSource, fragmentShaderSource]);

      // look up where the vertex data needs to go.
      var positionLocation = gl.getAttribLocation(program, "a_position");
      var texcoordLocation = gl.getAttribLocation(program, "a_texcoord");

      // lookup uniforms
      var matrixLocation = gl.getUniformLocation(program, "u_matrix");
      var textureLocation = gl.getUniformLocation(program, "u_texture");

      // Create a buffer.
      var positionBuffer = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

      // Put a unit quad in the buffer
      var positions = [
        0, 0,
        0, 1,
        1, 0,
        1, 0,
        0, 1,
        1, 1,
      ];
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);

      // Create a buffer for texture coords
      var texcoordBuffer = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, texcoordBuffer);

      // Put texcoords in the buffer
      var texcoords = [
        0, 0,
        0, 1,
        1, 0,
        1, 0,
        0, 1,
        1, 1,
      ];
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(texcoords), gl.STATIC_DRAW);

      // creates a texture info { width: w, height: h, texture: tex }
      // The texture will start with 1x1 pixels and be updated
      // when the image has loaded
      function loadImageAndCreateTextureInfo(url) {
        var tex = gl.createTexture();
        gl.bindTexture(gl.TEXTURE_2D, tex);
        // Fill the texture with a 1x1 blue pixel.
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE,
            new Uint8Array([0, 0, 255, 255]));

        // let's assume all images are not a power of 2
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);

        var textureInfo = {
          width: 1,   // we don't know the size until it loads
          height: 1,
          texture: tex,
        };

        textureInfo.width = 512;
        textureInfo.height = 512;

        gl.bindTexture(gl.TEXTURE_2D, textureInfo.texture);

        /*
    One of the following objects can be used as a pixel source for the texture:

    Uint8Array (must be used if type is gl.UNSIGNED_BYTE)
    Uint16Array (must be used if type is either gl.UNSIGNED_SHORT_5_6_5, gl.UNSIGNED_SHORT_4_4_4_4, gl.UNSIGNED_SHORT_5_5_5_1, gl.UNSIGNED_SHORT or ext.HALF_FLOAT_OES)
    Uint32Array (must be used if type is gl.UNSIGNED_INT or ext.UNSIGNED_INT_24_8_WEBGL)
    Float32Array (must be used if type is gl.FLOAT)
    ImageData,
    HTMLImageElement,
    HTMLCanvasElement,
    HTMLVideoElement,
    ImageBitmap.

    */

        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, document.getElementById('canvas2D'));


        return textureInfo;
      }


      function initWebGLComponent() {
        webglUtils.resizeCanvasToDisplaySize(gl.canvas);

        // Tell WebGL how to convert from clip space to pixels
        gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);

        gl.clear(gl.COLOR_BUFFER_BIT);

        drawImage(
            loadImageAndCreateTextureInfo('').texture,
            512,
            512,
            0,
            0);
      }

      var then = 0;

      function render(time) {
        var now = time * 0.001;
        var deltaTime = Math.min(0.1, now - then);
        then = now;
        draw();

        requestAnimationFrame(render);
      }

      requestAnimationFrame(render);

      // Unlike images, textures do not have a width and height associated
      // with them so we'll pass in the width and height of the texture
      function drawImage(tex, texWidth, texHeight, dstX, dstY) {
        gl.bindTexture(gl.TEXTURE_2D, tex);

        // Tell WebGL to use our shader program pair
        gl.useProgram(program);

        // Setup the attributes to pull data from our buffers
        gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
        gl.enableVertexAttribArray(positionLocation);
        gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);
        gl.bindBuffer(gl.ARRAY_BUFFER, texcoordBuffer);
        gl.enableVertexAttribArray(texcoordLocation);
        gl.vertexAttribPointer(texcoordLocation, 2, gl.FLOAT, false, 0, 0);

        // this matrix will convert from pixels to clip space
        var matrix = m4.orthographic(0, gl.canvas.width, gl.canvas.height, 0, -1, 1);

        // this matrix will translate our quad to dstX, dstY
        matrix = m4.translate(matrix, dstX, dstY, 0);

        // this matrix will scale our 1 unit quad
        // from 1 unit to texWidth, texHeight units
        matrix = m4.scale(matrix, texWidth, texHeight, 1);

        // Set the matrix.
        gl.uniformMatrix4fv(matrixLocation, false, matrix);

        // Tell the shader to get the texture from texture unit 0
        gl.uniform1i(textureLocation, 0);

        // initWebGLComponent the quad (2 triangles, 6 vertices)
        gl.drawArrays(gl.TRIANGLES, 0, 6);
      }

    }
  }
}
</script>
