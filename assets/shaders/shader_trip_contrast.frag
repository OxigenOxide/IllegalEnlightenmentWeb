precision mediump float;
varying vec4 v_color;
varying vec2 v_texCoord0;
varying float v_count;
varying float v_intensity;
uniform sampler2D u_sampler2D;

uniform float colorCenter = .65;

void main(){

    vec4 color = texture2D(u_sampler2D, v_texCoord0) * v_color;

    vec3 colorDist = color.rgb - colorCenter; // distance of r, g, and b from .5
    colorDist *= 2. * v_intensity; // map to range [-v_intensity, v_intensity]
    colorDist = 1 + colorDist; // map to range [1 - v_intensity, 1 + v_intensity]

    color.rgb *= colorDist;

    gl_FragColor = color;
}
