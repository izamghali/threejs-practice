import * as THREE from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl-2')

// Scene
const scene = new THREE.Scene()

/**
 * Objects
 */

// group
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 'green' })

const group = new THREE.Group();
const mesh = new THREE.Mesh(geometry, material)
const cube2 = new THREE.Mesh(
    geometry,
    new THREE.MeshBasicMaterial({ color: 'violet' })
)

group.position.y = 1
group.rotation.z = 0
group.scale.z = 4

group.add(mesh, cube2)
scene.add(group)

/**
 * Sizes
 */
const sizes = {
    width: 800,
    height: 600
}

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
scene.add(camera)

// Axis Helper
const axisHelper = new THREE.AxesHelper(2)
scene.add(axisHelper)

const pi = Math.PI;
const half = Math.PI * 0.5;
const quarter = half / 2;

mesh.position.set(1, 1, 0)
camera.position.set(2, 1.2, 5)
mesh.scale.set(1.5, 1.5, 0.5)
mesh.rotation.reorder('YXZ') // reorder before setting rotation
mesh.rotation.set(0, 0, 0)

camera.lookAt(group.position) // telling the camera to look at the object

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)