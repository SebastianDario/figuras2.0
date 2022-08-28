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
const geometry = new THREE.BoxGeometry( 2, 2, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0xffffff } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;

//animation
function animate() {
	requestAnimationFrame( animate );
    cube.rotation.x += 0.02;
    cube.rotation.y += 0.02;
	renderer.render( scene, camera );
}
animate();




