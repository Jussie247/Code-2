"use strict";
var FirstFudge;
(function (FirstFudge) {
    var f = FudgeCore;
    window.addEventListener("load", start);
    const node = new f.Node("Node");
    let viewport;
    function start() {
        const canvas = document.querySelector("canvas");
        //console.log(canvas);
        const mesh = new f.MeshCube("Cube");
        //console.log(mesh);
        const camera = new f.ComponentCamera();
        //console.log(camera);
        const cmpMesh = new f.ComponentMesh(mesh);
        node.addComponent(cmpMesh);
        const material = new f.Material("Material", f.ShaderLit);
        const cmpMaterial = new f.ComponentMaterial(material);
        cmpMaterial.clrPrimary.set(1, 0.4, 0.7, 1);
        node.addComponent(cmpMaterial);
        camera.mtxPivot.translateZ(5);
        camera.mtxPivot.rotateY(180);
        const cpmTransform = new f.ComponentTransform();
        node.addComponent(cpmTransform);
        //console.log(node);
        viewport = new f.Viewport();
        viewport.initialize("viewport", node, camera, canvas);
        //console.log(viewport);
        f.Loop.addEventListener("loopFrame" /* f.EVENT.LOOP_FRAME */, update);
        f.Loop.start();
    }
    function update() {
        const tSpeed = 3 / 1; //units per second
        const rSpeed = 360 / 3; //degrees per second
        const frameTimeInMiliSeconds = f.Loop.timeFrameGame;
        const frameTimeInSeconds = (frameTimeInMiliSeconds / 1000);
        /*  const degrees: number = 360 * frameTimeInSeconds;
         node.mtxLocal.rotateY(degrees);
         node.mtxLocal.rotateX(degrees); */
        if (f.Keyboard.isPressedOne([f.KEYBOARD_CODE.W]))
            node.mtxLocal.translateZ(tSpeed * frameTimeInSeconds);
        if (f.Keyboard.isPressedOne([f.KEYBOARD_CODE.S]))
            node.mtxLocal.translateZ(-tSpeed * frameTimeInSeconds);
        if (f.Keyboard.isPressedOne([f.KEYBOARD_CODE.A]))
            node.mtxLocal.rotateY(rSpeed * frameTimeInSeconds);
        if (f.Keyboard.isPressedOne([f.KEYBOARD_CODE.D]))
            node.mtxLocal.rotateY(-rSpeed * frameTimeInSeconds);
        viewport.draw();
    }
})(FirstFudge || (FirstFudge = {}));
//# sourceMappingURL=FirstFudge.js.map