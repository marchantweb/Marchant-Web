export default `

      precision highp float;
      varying vec2 fragmentCoordinates;
      uniform vec2 iResolution;
      uniform float iTime;
      uniform vec2 iMouse;
      uniform float iVerticalOffset;

      // Configuration
      #define NOISE_STRENGTH 0.06
      #define SPECULAR_STRENGTH 0.17
      #define ANIMATION_SPEED 0.4
      #define DEPTH 30.
      #define SEGMENT_QUALITY 1.2

      // Shape Definition
      float blob(vec3 q) {
          float f = DEPTH;
          f *= (cos(q.z * 1.1)) * (atan(q.x) + 0.2 + (iVerticalOffset * 0.5)) * (cos(q.y * cos(q.z * 2. )) + 1.0) + cos(q.z * 5. + (iVerticalOffset * 2.0) + iTime * ANIMATION_SPEED) * cos(q.x) * sin(q.y) * ((.6 * (1.0 - (iVerticalOffset * 0.9))) + (iMouse.y * .05));
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
          vec3 o=vec3(p.x + 14. - (iVerticalOffset * 3.0) - ((1.0 - iMouse.x) * 0.5), p.y + 2.7 + (iVerticalOffset * 0.8) - (iMouse.y * 0.15), -0.35  + (iVerticalOffset * 0.2));
          vec3 d=vec3(p.x * 8. + ((1.0 - iMouse.x) * 0.5) - (iVerticalOffset * 8.0), p.y + 0.5 + ((1.0 - iMouse.y) * 0.25) - (iVerticalOffset * 2.0), 1.)/128.;
          vec4 c=vec4(0.);
          float t = 0.;
          for (int i = 0;i < 180; i++)
          {
              if (blob(o + d * t) < 8.)
              {
                  vec3 e = vec3(.1, .0, 2.1 - (iVerticalOffset * 0.8));
                  vec3 n = vec3(.0);
                  n.x = blob(o + d * t) - blob(vec3(o + d * t + e.xyy));
                  n.y = blob(o + d * t) - blob(vec3(o + d * t + e.yxy));
                  n.z = blob(o + d * t) - blob(vec3(o + d * t + e.yyx));
                  n = normalize(n);
                  c += max(dot(vec3(0.2 + (iMouse.x * 0.1), 2. - (iVerticalOffset * .1), -1. - (iVerticalOffset * 0.5)), n), .0) + min(dot(vec3(3.0 - (iVerticalOffset * 0.1), 10.2, -11.), n), .1) * 0.1;
                  break;
              }
              t += SEGMENT_QUALITY;
          }

          // Base Color
          gl_FragColor += vec4(.16, 0.05, .38, 1.) * 0.9 * (1. - (iVerticalOffset * 0.05));

          // Specular
          gl_FragColor += c * (SPECULAR_STRENGTH - (iVerticalOffset * 0.08)) * vec4(.40, 0.6, 0.9, 1);

          // Brightness
          gl_FragColor *= (t * (.04));

          // Apply Noise
          float seed = dot(uv * vec2(1000.), vec2(12, 52));
          float noise = fract(sin(seed) * 43758.5453 + t);
          noise = gaussian(noise, float(0.0), float(0.5) * float(0.5));
          vec3 grain = vec3(noise) * (1.0 - gl_FragColor.rgb);
          gl_FragColor.rgb -= grain * NOISE_STRENGTH;

      }
`
