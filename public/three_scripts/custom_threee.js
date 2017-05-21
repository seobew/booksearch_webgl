// function init() {
//     var scene = new THREE.Scene();
//     var camera = new THREE.PerspectiveCamera(80, window.innerWidth/window.innerHeight, 0.1, 1000);
//     var renderer = new THREE.WebGLRenderer();
//     renderer.setClearColor(0xEEEEEE);
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     //Show Axis
//     var axes = new THREE.AxisHelper(10);
//     scene.add(axes);

//     //Let's make a cube  
//      var cubeGeometry = new THREE.BoxGeometry(6,6,6);  
//      var cubeMeterial = new THREE.MeshBasicMaterial({color: 0x0089A0});  
//      var cube = new THREE.Mesh(cubeGeometry, cubeMeterial);  
//      cube.position.x = 0;  
//      cube.position.y = 10;  
//      cube.position.z = 10;  
//      scene.add(cube);
//      //Let's make a sphere
//      var sphereGeometry = new THREE.SphereGeometry(4,32,32);
//      var sphereMeterial = new THREE.MeshBasicMaterial({color: 0xFE98A0});
//      var sphere = new THREE.Mesh(sphereGeometry, sphereMeterial);
//      sphere.position.x = -15;
//      sphere.position.y = 2;
//      sphere.position.z = 0;
//      scene.add(sphere);

//      var vShader = $('vertexshader');
//      var fShader = $('fragmentshader');

//      var shaderMaterial =
//    new THREE.ShaderMaterial({
//      vertexShader:   vShader.text(),
//      fragmentShader: fShader.text()
//    });

//     //Let's make a plane
//     var planeGeometry = new THREE.PlaneGeometry(60,30,1,1);
//     var planeMaterial = new THREE.MeshBasicMaterial({color: 0xCCCCCC});
//     var plane = new THREE.Mesh(planeGeometry, planeMaterial);
//     plane.rotation.x = -0.5 * Math.PI;
//     scene.add(plane);
//     camera.position.x = 0;
//     camera.position.y = 30;
//     camera.position.z = 30;
//     camera.lookAt(scene.position);
//     // 여기서 페이지에 올려줌.
//     document.getElementById("threejs_scene").appendChild(renderer.domElement);
//     renderScene();
//     function renderScene() {
//         renderer.render(scene,camera);
//     }
// }
// window.onload = init();

// 쉐이더 부분

var container;
var camera, scene, renderer;
var uniforms, material, mesh;
var mouseX = 0, mouseY = 0,
lat = 0, lon = 0, phy = 0, theta = 0;
var windowHalfX = window.innerWidth / 2;
var windowHalfY = window.innerHeight / 2;
init();
var startTime = Date.now();
animate();
function init() {
container = document.getElementById( 'threejs_scene' );
camera = new THREE.Camera();
camera.position.z = 1;
scene = new THREE.Scene();
uniforms = {
    time: { type: "f", value: 1.0 },
    resolution: { type: "v2", value: new THREE.Vector2() }
};
material = new THREE.ShaderMaterial( {
    uniforms: uniforms,
    vertexShader: document.getElementById( 'vertexShader' ).textContent,
    fragmentShader: document.getElementById( 'fragmentShader' ).textContent
});
mesh = new THREE.Mesh( new THREE.PlaneGeometry( 2, 2 ), material );
scene.add( mesh );
renderer = new THREE.WebGLRenderer();
container.appendChild( renderer.domElement );
uniforms.resolution.value.x = window.innerWidth;
uniforms.resolution.value.y = window.innerHeight;
renderer.setSize( window.innerWidth, window.innerHeight );
}
function animate() {
requestAnimationFrame( animate );
render();
}
function render() {
var elapsedMilliseconds = Date.now() - startTime;
var elapsedSeconds = elapsedMilliseconds / 1000.;
uniforms.time.value = 60. * elapsedSeconds;
renderer.render( scene, camera );
}