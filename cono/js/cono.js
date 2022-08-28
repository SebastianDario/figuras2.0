//Escenario
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x1a773c);  
scene.fog = new THREE.Fog (0x76456c, 0.1, 8);
var loader = new THREE.TextureLoader();
loader.load('../Imagenes/images.jpeg', function(texture){
    scene.background = texture; 
    }
    );

//camaras
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

//render
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//Geometria
const geometry = new THREE.ConeGeometry( 1, 1 , 1 );
const material = new THREE.MeshBasicMaterial( {color: 0xffff00, side: THREE.DubleSide } );
const mesh = new THREE.Mesh( geometry, material );
scene.add( mesh );

camera.position.y = 0.5;
camera.position.z = 5;

//animation
function animate() {
	requestAnimationFrame( animate );
    mesh.rotation.x += 0.02;
    mesh.rotation.y += 0.02;
    mesh.rotation.z += 0.05;
	renderer.render( scene, camera );
}
animate();




