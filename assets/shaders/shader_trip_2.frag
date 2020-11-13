precision mediump float;
varying vec4 v_color;
varying vec2 v_texCoord0;
varying float v_count;
varying float v_intensity;
uniform sampler2D u_sampler2D;

void main(){

    vec4 color = texture2D(u_sampler2D, vec2(v_texCoord0.x, v_texCoord0.y)) * v_color;

    float dst = 0.5 - abs(0.5 - v_texCoord0.y);

    //bad trip
    float r = texture2D(u_sampler2D, vec2(v_texCoord0.x,v_texCoord0.y + .15 * dst * v_intensity * sin(v_count + v_texCoord0.x * 5.))).r; // for bad trip
    color.g *= r + (1.-r) * (1.-v_intensity); // for bad trip


    gl_FragColor = color;
}
