
varying vec3 vertexNormal;
void main() {
    float intensity = pow(0.5 - dot(vertexNormal, vec3(0.0,0.0,1.0)), 2.0);
    
    gl_FragColor = vec4(0.1804, 0.4784, 0.8745, 1.0) * intensity;
}