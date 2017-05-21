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
// 		var cubeGeometry = new THREE.BoxGeometry(6,6,6);
// 		var cubeMeterial = new THREE.MeshBasicMaterial({color: 0x0089A0});
// 		var cube = new THREE.Mesh(cubeGeometry, cubeMeterial);
// 		cube.position.x = 0;
// 		cube.position.y = 10;
// 		cube.position.z = 10;
// 		scene.add(cube);
// 		//Let's make a sphere
// 		var sphereGeometry = new THREE.SphereGeometry(4,32,32);
// 		var sphereMeterial = new THREE.MeshBasicMaterial({color: 0xFE98A0});
// 		var sphere = new THREE.Mesh(sphereGeometry, sphereMeterial);
// 		sphere.position.x = -15;
// 		sphere.position.y = 2;
// 		sphere.position.z = 0;
// 		scene.add(sphere);

// 		var vShader = $('vertexshader');
// 		var fShader = $('fragmentshader');

// 		var shaderMaterial =
// 	  new THREE.ShaderMaterial({
// 	    vertexShader:   vShader.text(),
// 	    fragmentShader: fShader.text()
// 	  });

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
//     	requestAnimationFrame(renderScene);
// 			//cube animation
// 			cube.rotation.x += 0.01;
// 			cube.rotation.y += 0.01;
// 			cube.rotation.z += 0.01;
//         renderer.render(scene,camera);
//     }
// }
// window.onload = init();
