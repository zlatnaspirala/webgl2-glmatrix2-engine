/* eslint-disable no-unused-vars */

var App = {
  name: "Matrix engine Manifest",
  version: "1.0.4",
  events: true,
  logs: false,
  draw_interval: 10,
  antialias: false,
  camera: {
    viewAngle: 45,
    nearViewpoint: 0.1,
    farViewpoint: 1000,
    edgeMarginValue: 100,
    FirstPersonController: false,
    speedAmp: 0.5
  },
  textures: [],                          // readOnly in manifest
  tools: {},                             // readOnly in manifest
  operation: {},                         // readOnly in manifest
  commonObject: {},                      // readOnly in manifest
  dynamicBuffer: true,
  scene: {},                             // readOnly in manifest
  meshes: {},                            // readOnly in manifest
  limitations: {                         // readOnly in manifest
    maxTexturesInFragmentShader: null,
  },
  updateBeforeDraw: [],
  audioSystem: {},
  pwa: {
    addToHomePage: true,
  },
  ready: false,
  onload: function () { },
};

export default App;