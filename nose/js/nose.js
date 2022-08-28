//Escenario
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x1a2b3c);  
scene.fog = new THREE.Fog (0x76456c, 0.1, 8);
var loader = new THREE.TextureLoader();
loader.load('../Imagenes/gato.jpeg', function(texture){
    scene.background = texture; 
    });

//camaras
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

//render
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//Geometria
const geometry = new THREE.CapsuleGeometry( 1, 1, 4, 3 );
const material = new THREE.MeshBasicMaterial( {color: 0x175f50} );
const capsule = new THREE.Mesh( geometry, material );
scene.add( capsule );

camera.position.z = 5;

//animation
function animate() {
	requestAnimationFrame( animate );
    capsule.rotation.x += 0.01;
    capsule.rotation.y += 0.09;
	renderer.render( scene, camera );
}
animate();




