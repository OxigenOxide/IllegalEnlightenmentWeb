precision mediump float;
varying vec4 v_color;
varying vec2 v_texCoord0;
varying float v_count;
varying float v_intensity;
uniform sampler2D u_sampler2D;

void main(){

    vec4 color = texture2D(u_sampler2D, vec2(v_texCoord0.x, v_texCoord0.y)) * v_color;

    float dst = 0.5 - abs(0.5 - v_texCoord0.y);


    // green shift
    float g = texture2D(u_sampler2D, vec2(v_texCoord0.x,v_texCoord0.y + .15 * v_intensity * dst * sin(v_count + v_texCoord0.x * 5.))).g;
    color.g = g;

     //night time moody
     //float b = texture2D(u_sampler2D, vec2(v_texCoord0.x,v_texCoord0.y + .05 * dst * sin(v_count + v_texCoord0.x * 5.))).b;
     //color.b += b * v_intensity;

    //first try
    //float r = texture2D(u_sampler2D, vec2(v_texCoord0.x,v_texCoord0.y + .05 * dst * sin(v_count + v_texCoord0.x * 5.))).r;
    //color.r += r;

    //bad trip
    //float r = texture2D(u_sampler2D, vec2(v_texCoord0.x,v_texCoord0.y + .05 * dst * sin(v_count + v_texCoord0.x * 5.))).r; // for bad trip
    //color.g *= r; // for bad trip


    gl_FragColor = color;
}
