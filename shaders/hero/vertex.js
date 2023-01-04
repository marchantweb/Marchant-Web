export default `
attribute vec4 position;
varying vec2 fragmentCoordinates;

void main() {
    gl_Position = vec4(position.xy, 0.0, 1.0);
    fragmentCoordinates = position.xy * 1.;
}
`
