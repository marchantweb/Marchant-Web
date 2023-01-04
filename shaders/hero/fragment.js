export default `
      precision mediump float;
      varying vec2 fragCoord;
      vec2 iResolution = vec2(0.1920, 0.961);

      // Configuration
      #define NOISE_STRENGTH 0.1
      #define SPECULAR_STRENGTH 0.16
      #define ANIMATION_SPEED 0.5
      #define DEPTH 100.
      #define SEGMENT_QUALITY 2.2
      #define iTime 0.0

      // Blob Effect
      float blob(vec3 q){
        float f= DEPTH;
        f *= (cos(q.z * 1.0))*(atan(q.x)+0.2)*(cos(q.y * cos(q.z * 2.))+1.0)+cos(q.z * 5. + iTime * ANIMATION_SPEED)*cos(q.x*1.)*sin(q.y*1.)*.5;
          return f;
      }

      // Gaussian Noise Effect
      float gaussian(float z, float u, float o) {
          return (1.0 / (o * sqrt(2.0 * 3.1415))) * exp(-(((z - u) * (z - u)) / (2.0 * (o * o))));
      }

      // Output
      void main( void){

        // Basics
        vec2 ps = vec2(1.0) / iResolution.xy;
        vec2 uv = fragCoord * ps;
        gl_FragColor = vec4(0,0,0,1.);

        vec2 p= -3. + 2. * fragCoord.xy / iResolution.xy;
        vec3 o=vec3(p.x + 8., p.y + 0.4, -0.2);
        vec3 d=vec3(p.x*5.,p.y,1.)/128.;
        vec4 c=vec4(0.);
        float t=0.;
        for(int i=0;i<140;i++)
        {
            if(blob(o+d*t)<1.)
            {
                vec3 e=vec3(.01,.0,.0);
                vec3 n=vec3(.0);
                n.x=blob(o+d*t)-blob(vec3(o+d*t+e.xyy));
                n.y=blob(o+d*t)-blob(vec3(o+d*t+e.yxy));
                n.z=blob(o+d*t)-blob(vec3(o+d*t+e.yyx));
                n=normalize(n);
                c+=max(dot(vec3(0.5,2.,-1),n),.0)+min(dot(vec3(5.0,1.2,-10.),n),.1)*0.1;
                break;
            }
            t+= SEGMENT_QUALITY;
        }

        // Base Color
        gl_FragColor += vec4(.16,0.05,.38,1.) * 0.8;

        // Specular
        gl_FragColor += c * SPECULAR_STRENGTH * vec4(.40,0.6,0.9,1);

        // Brightness
        gl_FragColor *= (t * .04);

        // Apply Noise
        float seed = dot(uv, vec2(12.9898, 78.233));
        float noise = fract(sin(seed) * 43758.5453 + t);
        noise = gaussian(noise, float(0.0), float(0.5) * float(0.5));
        vec3 grain = vec3(noise) * (1.0 - gl_FragColor.rgb);
        gl_FragColor.rgb -= grain * NOISE_STRENGTH;

      }`
