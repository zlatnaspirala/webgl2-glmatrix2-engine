/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* global */

import App from '../program/manifest';
import {reDraw, world} from './matrix-world';
import {looper, modifyLooper, updateFPS, totalTime, lastTime} from './engine';

export var animate = function (rotationObject) {
  var timeNow = new Date().getTime();
  if (lastTime != 0) {
    var elapsed = timeNow - lastTime;
    rotationObject.rotation.rotx += (rotationObject.rotation.rotSpeedX * elapsed) / 1000.0;
    rotationObject.rotation.roty += (rotationObject.rotation.rotSpeedY * elapsed) / 1000.0;
    rotationObject.rotation.rotz += (rotationObject.rotation.rotSpeedZ * elapsed) / 1000.0;
  }
};

export var reDrawID = 0;

App.operation.reDrawGlobal = function () {
  modifyLooper(0);

  reDrawID = requestAnimationFrame(reDraw);

  world.renderPerspective();

  for (var t = 0; t < App.updateBeforeDraw.length; t++) {
    App.updateBeforeDraw[t].UPDATE();
  }

  while (looper <= world.contentList.length - 1) {
    if ('triangle' == world.contentList[looper].type) {
      world.GL.gl.useProgram(world.contentList[looper].shaderProgram);
      world.drawTriangle(world.contentList[looper]);
      world.animate(world.contentList[looper]);
    } else if ('square' == world.contentList[looper].type) {
      world.GL.gl.useProgram(world.contentList[looper].shaderProgram);
      world.drawSquare(world.contentList[looper]);
      world.animate(world.contentList[looper]);
    } else if ('cube' == world.contentList[looper].type || 'cubeTex' == world.contentList[looper].type || 'cubeLightTex' == world.contentList[looper].type) {
      world.GL.gl.useProgram(world.contentList[looper].shaderProgram);
      world.drawCube(world.contentList[looper]);
      world.animate(world.contentList[looper]);
    } else if ('pyramid' == world.contentList[looper].type) {
      world.GL.gl.useProgram(world.contentList[looper].shaderProgram);
      world.drawPyramid(world.contentList[looper]);
      world.animate(world.contentList[looper]);
    } else if ('obj' == world.contentList[looper].type) {
      world.GL.gl.useProgram(world.contentList[looper].shaderProgram);
      world.drawObj(world.contentList[looper]);
      world.animate(world.contentList[looper]);
    } else if ('squareTex' == world.contentList[looper].type) {
      world.GL.gl.useProgram(world.contentList[looper].shaderProgram);
      world.drawSquareTex(world.contentList[looper]);
      world.animate(world.contentList[looper]);
    } else if ('sphereLightTex' == world.contentList[looper].type || 'sphere' == world.contentList[looper].type || 'generatorLightTex' == world.contentList[looper].type) {
      world.GL.gl.useProgram(world.contentList[looper].shaderProgram);
      world.drawSphere(world.contentList[looper]);
      world.animate(world.contentList[looper]);
    }
    modifyLooper(looper + 1);
  }

  // setTimeout(App.operation.reDrawGlobal , 20 )

  updateFPS(1);
};

App.operation.CameraPerspective = function () {
  this.GL.gl.viewport(0, 0, canvas.width, canvas.height);
  this.GL.gl.clear(this.GL.gl.COLOR_BUFFER_BIT | this.GL.gl.DEPTH_BUFFER_BIT);
  // mat4.identity( world.mvMatrix )
  // mat4.translate(world.mvMatrix  , world.mvMatrix, [ 10 , 10 , 10] );
  /* Field of view, Width height ratio, min distance of viewpoint, max distance of viewpoint, */
  mat4.perspective(this.pMatrix, degToRad(App.camera.viewAngle), this.GL.gl.viewportWidth / this.GL.gl.viewportHeight, App.camera.nearViewpoint, App.camera.farViewpoint);
};

export var callReDraw_ = function () {
  requestAnimationFrame(reDraw);
};
