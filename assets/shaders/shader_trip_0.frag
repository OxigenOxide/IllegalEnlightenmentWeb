precision mediump float;
varying vec4 v_color;
varying vec2 v_texCoord0;
varying float v_count;
varying float v_intensity;
uniform sampler2D u_sampler2D;
void main(){

    float dst = .5 - abs(.5 - v_texCoord0.y);
    vec4 color = texture2D(u_sampler2D, vec2(v_texCoord0.x,v_texCoord0.y + .15 * dst * v_intensity * sin(v_count + v_texCoord0.x * 5.0))) * v_color;

    gl_FragColor = color;
}
