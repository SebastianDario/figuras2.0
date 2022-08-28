//Escenario
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x4a2b3c);  
scene.fog = new THREE.Fog (0x76456c, 0.1, 8);
var loader = new THREE.TextureLoader();

//camaras
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

//render
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//Geometria
const geometry = new THREE.CircleGeometry( 1, 12 );
const material = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
const circle = new THREE.Mesh( geometry, material );
scene.add( circle );

camera.position.z = 5;

//animation
function animate() {
	requestAnimationFrame( animate );
    circle.rotation.x += 0.10;
    circle.rotation.y += 0.10;
	renderer.render( scene, camera );
}
animate();




