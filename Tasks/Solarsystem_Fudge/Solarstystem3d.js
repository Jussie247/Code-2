"use strict";
var SolarsystemFudge;
(function (SolarsystemFudge) {
    window.addEventListener("load", start);
    let sun;
    let viewport;
    function start() {
        sun = new SolarsystemFudge.Body3d("Sun", 1, 0, "yellow");
        const earth = new SolarsystemFudge.Body3d("Earth", 1, 2, "blue");
        const rotationNode = new SolarsystemFudge.f.Node("EarthRotation");
        const rotationTransform = new SolarsystemFudge.f.ComponentTransform();
        rotationNode.addComponent(rotationTransform);
        sun.addChild(rotationNode);
        rotationNode.addChild(earth);
        console.log(earth);
        const canvas = document.querySelector("canvas");
        const camera = new SolarsystemFudge.f.ComponentCamera();
        // camera.mtxPivot.translateZ(15);
        // camera.mtxPivot.translateY(15);
        camera.mtxPivot.rotateY(180);
        camera.mtxPivot.translateZ(-10);
        viewport = new SolarsystemFudge.f.Viewport();
        viewport.initialize("viewport", sun, camera, canvas);
        //console.log(viewport);
        SolarsystemFudge.f.Loop.addEventListener("loopFrame" /* f.EVENT.LOOP_FRAME */, update);
        SolarsystemFudge.f.Loop.start();
    }
    function update() {
        /*       const tSpeed: number = 3 / 1; //units per second
              const rSpeed: number = 360 / 3; //degrees per second
              const frameTimeInMiliSeconds: number = f.Loop.timeFrameGame;
              const frameTimeInSeconds: number = (frameTimeInMiliSeconds / 1000);
      
              if (f.Keyboard.isPressedOne([f.KEYBOARD_CODE.W]))
                  node.mtxLocal.translateZ(tSpeed * frameTimeInSeconds);
              if (f.Keyboard.isPressedOne([f.KEYBOARD_CODE.S]))
                  node.mtxLocal.translateZ(-tSpeed * frameTimeInSeconds);
      
              if (f.Keyboard.isPressedOne([f.KEYBOARD_CODE.A]))
                  node.mtxLocal.rotateY(rSpeed * frameTimeInSeconds);
              if (f.Keyboard.isPressedOne([f.KEYBOARD_CODE.D]))
                  node.mtxLocal.rotateY(-rSpeed * frameTimeInSeconds);
      
              const up: f.Vector3 = f.Vector3.Y();
              viewport.camera.mtxPivot.lookAt(node.mtxWorld.translation);
              f.Recycler.store(up); */
        viewport.draw();
    }
})(SolarsystemFudge || (SolarsystemFudge = {}));
//# sourceMappingURL=Solarstystem3d.js.map