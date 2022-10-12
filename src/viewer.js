const viewer = new Cesium.Viewer('cesiumContainer', {
    animation: false,
    geocoder: false,
    vrButton: false,
    homeButton: false,
    // infoBox: false,
    sceneModePicker: false,
    timeline: false,
    navigationHelpButton: false,
    baseLayerPicker: false,
    scene3DOnly: true,
    terrainProvider: Cesium.createWorldTerrain()
});
var initialPosition = new Cesium.Cartesian3.fromDegrees(121.57367918695188, 24.986245549775223, 500);
var initialOrientation = new Cesium.HeadingPitchRoll.fromDegrees(0, -20, 0);
var homeCameraView = {
    destination: initialPosition,
    orientation: {
        heading: initialOrientation.heading,
        pitch: initialOrientation.pitch,
        roll: initialOrientation.roll
    }
};
viewer.scene.camera.setView(homeCameraView);
viewer._cesiumWidget._creditContainer.style.display = "none";