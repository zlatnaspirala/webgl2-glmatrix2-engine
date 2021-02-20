![webGL2GLMatrix2](https://github.com/zlatnaspirala/webgl2-glmatrix2-engine/blob/master/webgl2glmatrix2.jpg)

## About webgl2-glmatrix2 project ##

The benefits of this project is offering an overview of the entire application logic,
 easy native implementations (hybrid app), object structural. Thanks to Mr.Keestu i use
 (gl-program-structure) new version of glmatrix (2.0). Push&Pop matrix just like in opengles 1.1.
 First level of customisation is texture part of code. In example custom_texture.js

### List of examples : ###

 - Adding color cube
 - Adding color pyramyde
 - Adding color square
 - Adding color triangle
 - Adding geometry
 - Adding multi (compose) textures
 - Adding square texture
 - Blending
 - Audion amnipulation
 - Camera texture (stream texture)
 - Cube
 - Cube Geometry
 - Cube Light & texture
 - Cube light dynamic
 - Custom texture
 - First Person controller
 - Load obj files
 - Object animation -morh sequence
 - Object animation mesh indices calculation
 - JS1Kilo examples implementation
 - Porting 2D canvas (Active textures)
 - Sphere geometry
 - Texture uv manipulation
 - Videos textures

We just override function for texture executing code.
 Next level is full custom opportunity , geometry , collision , networking etc.

### Custom textures ###

```
  App.scene.MySquareTexure1.custom.gl_texture = function ( object , t ) {

  world.GL.gl.bindTexture(world.GL.gl.TEXTURE_2D, object.textures[t] );
  world.GL.gl.texParameteri(world.GL.gl.TEXTURE_2D, world.GL.gl.TEXTURE_MAG_FILTER, world.GL.gl.LINEAR);
  world.GL.gl.texParameteri(world.GL.gl.TEXTURE_2D, world.GL.gl.TEXTURE_MIN_FILTER, world.GL.gl.LINEAR);
  world.GL.gl.texParameteri(world.GL.gl.TEXTURE_2D, world.GL.gl.TEXTURE_WRAP_S, world.GL.gl.CLAMP_TO_EDGE);
  world.GL.gl.texParameteri(world.GL.gl.TEXTURE_2D, world.GL.gl.TEXTURE_WRAP_T, world.GL.gl.CLAMP_TO_EDGE);

      world.GL.gl.texImage2D(
                    world.GL.gl.TEXTURE_2D,
                    0, // Level of details
                    world.GL.gl.RGBA, // Format
                    world.GL.gl.RGBA,
                    world.GL.gl.UNSIGNED_BYTE, // Size of each channel
                    object.textures[t].image
                    );

      world.GL.gl.generateMipmap(world.GL.gl.TEXTURE_2D);

  }
```


### First person controller: ###

```
  //In one line activate also deactivate .
  App.camera.FirstPersonController = true;

  // Look in manifest.js

  camera : {
    viewAngle: 45,
    nearViewpoint: 0.1,
    farViewpoint: 1000,
    edgeMarginValue: 100,
    FirstPersonController: false
  }
```

### Animated female droid: ###

```
  // LOAD MESH FROM OBJ FILES...
  // if you dont use obj or complex mesh you no need for this func
  // Must be improved loading sequences

  function onLoadObj(meshes) {

      App.meshes = meshes;
      OBJ.initMeshBuffers(world.GL.gl, App.meshes.female);
      OBJ.initMeshBuffers(world.GL.gl, App.meshes.female1);
      OBJ.initMeshBuffers(world.GL.gl, App.meshes.female2);
      OBJ.initMeshBuffers(world.GL.gl, App.meshes.female3);
      OBJ.initMeshBuffers(world.GL.gl, App.meshes.female4);
      OBJ.initMeshBuffers(world.GL.gl, App.meshes.female5);
      OBJ.initMeshBuffers(world.GL.gl, App.meshes.female6);
      OBJ.initMeshBuffers(world.GL.gl, App.meshes.female7);
      OBJ.initMeshBuffers(world.GL.gl, App.meshes.female8);
      OBJ.initMeshBuffers(world.GL.gl, App.meshes.female9);
      OBJ.initMeshBuffers(world.GL.gl, App.meshes.female10);
      OBJ.initMeshBuffers(world.GL.gl, App.meshes.female11);
      OBJ.initMeshBuffers(world.GL.gl, App.meshes.female12);
      OBJ.initMeshBuffers(world.GL.gl, App.meshes.female13);
      OBJ.initMeshBuffers(world.GL.gl, App.meshes.female14);
      OBJ.initMeshBuffers(world.GL.gl, App.meshes.female15);
      OBJ.initMeshBuffers(world.GL.gl, App.meshes.female16);
      OBJ.initMeshBuffers(world.GL.gl, App.meshes.female17);
      OBJ.initMeshBuffers(world.GL.gl, App.meshes.female18);

      textuteImageSamplers2 = {
        source : ["res/images/RustPaint.jpg"],
        mix_operation : "multiply",             // ENUM: multiply, divide
      };

      setTimeout( function() {

        var animation_construct = {
            id : "female",
            sumOfAniFrames : 18 ,
            currentAni : 0 ,
            speed : 3
        };

        world.Add("obj" , 1 ,"female" , textuteImageSamplers2 , App.meshes.female , animation_construct );

        App.scene.female.position.y = -3;
        App.scene.female.rotation.rotationSpeed.z = 20;
        App.scene.female.position.z = -13;

      },100)

  }

  OBJ.downloadMeshes({
    'female': 'res/3d-objects/female/female_000001.obj',
    'female1': 'res/3d-objects/female/female_000003.obj',
    'female2': 'res/3d-objects/female/female_000005.obj',
    'female3': 'res/3d-objects/female/female_000007.obj',
    'female4': 'res/3d-objects/female/female_000009.obj',
    'female5': 'res/3d-objects/female/female_000011.obj',
    'female6': 'res/3d-objects/female/female_000013.obj',
    'female7': 'res/3d-objects/female/female_000015.obj',
    'female8': 'res/3d-objects/female/female_000017.obj',
    'female9': 'res/3d-objects/female/female_000019.obj',
    'female10': 'res/3d-objects/female/female_000021.obj',
    'female11': 'res/3d-objects/female/female_000023.obj',
    'female12': 'res/3d-objects/female/female_000025.obj',
    'female13': 'res/3d-objects/female/female_000027.obj',
    'female14': 'res/3d-objects/female/female_000029.obj',
    'female15': 'res/3d-objects/female/female_000031.obj',
    'female16': 'res/3d-objects/female/female_000033.obj',
    'female17': 'res/3d-objects/female/female_000035.obj',
    'female18': 'res/3d-objects/female/female_000037.obj',
  } , onLoadObj  );

```

### Blending: ###

```
  // Use it
  App.scene.female.glBlend.blendEnabled = true;
  App.scene.female.glBlend.blendParamSrc = ENUMERATORS.glBlend.param[4];
  App.scene.female.glBlend.blendParamDest = ENUMERATORS.glBlend.param[4];
```

- Load Obj with UV map (Blender export tested):

For more details dee this example script: `load_obj_file.js`

### Video texture : ###

```

world.Add("cubeLightTex" , 1 ,"TV" , textuteImageSamplers , App.meshes.TV );
App.scene.TV.streamTextures = new VIDEO_TEXTURE( "Galactic Expansion Fractal Morph [Official Video]" );

```

### Camera texture: ###

```
  App.scene.TV.streamTextures = new ACCESS_CAMERA( "webcam_beta" );
```

### Texture editor (runtime):


In examples : porting2d.js, porting_text.js, porting2d_particle.js you can found source code.
 It is very powerfull tool but you will need to use visual-js 2d canvas api part of project.
 Research 2dcanvas examples at:
 Online code snippet ( jsFiddle )
 https://jsfiddle.net/user/zlatnaspirala/fiddles/


I put 2d program instance intro app/canvas2d folder.
 Than i use iframe for access and preview.
 Code for 2d program you can found at : app/canvas2d/starter/

To show/hide iframe use:

App.scene.outsideBox - is any object who have streamTextures LOADED with 2DCANVAS .

```
  App.scene.outsideBox.streamTextures.showTextureEditor()
  E('HOLDER_STREAMS').style.display = 'none';
```

Access to the canvas2d program:

```
  App.scene.outsideBox.streamTextures.iframe.contentWindow.
```

Live demo:
Video and webcam works at:

https://maximumroulette.com/webgl2/examples.html

### Credits & Used Licence: ###


 - Video material used from :From youtube.com : Electric sheep - a facinating animated flame fractal
   TheMrNgaard Creative Commons Attribution licence (reuse allowed)
 - Project Base Structure inspired by
   Copyright (C) 2014 Tappali Ekanathan Keestu (keestu@gmail.com) GNU General Public License
 - Textures download from http://textures.com
 - Dinamic texture `bitcoin` used from:
   Author:Ioannis Cherouvim
    GitHub:cherouvim
    Reddit:/r/cherouvim
    Website:cherouvim.com
    Compo:canvas
    Demo link:https://js1k.com/2017-magic/demo/2853
    Shortlink:https://js1k.com/2853
    