"use strict";
var FirstFudge;
(function (FirstFudge) {
    var f = FudgeCore;
    window.addEventListener("load", start);
    const node = new f.Node("Node");
    const groundNode = new f.Node("NodeGround");
    let viewport;
    function start() {
        const canvas = document.querySelector("canvas");
        //Car
        const mesh = new f.MeshCube("Cube");
        const cmpMesh = new f.ComponentMesh(mesh);
        cmpMesh.mtxPivot.translateY(0.5);
        node.addComponent(cmpMesh);
        const material = new f.Material("Material", f.ShaderLit);
        const cmpMaterial = new f.ComponentMaterial(material);
        cmpMaterial.clrPrimary.set(1, 0.4, 0.7, 1);
        node.addComponent(cmpMaterial);
        const cpmTransform = new f.ComponentTransform();
        node.addComponent(cpmTransform);
        //Ground
        const groundMesh = new f.MeshQuad("Ground");
        const cmpGround = new f.ComponentMesh(groundMesh);
        cmpGround.mtxPivot.rotateX(-90, true);
        cmpGround.mtxPivot.scaleY(50);
        cmpGround.mtxPivot.scaleX(50);
        groundNode.addComponent(cmpGround);
        const groundMaterial = new f.Material("Ground Material", f.ShaderLitTextured);
        const cmpGroundMaterial = new f.ComponentMaterial(groundMaterial);
        groundNode.addComponent(cmpGroundMaterial);
        groundNode.addChild(node);
        const camera = new f.ComponentCamera();
        camera.mtxPivot.translateZ(15);
        camera.mtxPivot.translateY(15);
        /*   camera.mtxPivot.rotateY(180);
          camera.mtxPivot.rotateX(45); */
        viewport = new f.Viewport();
        viewport.initialize("viewport", groundNode, camera, canvas);
        //console.log(viewport);
        f.Loop.addEventListener("loopFrame" /* f.EVENT.LOOP_FRAME */, update);
        f.Loop.start();
    }
    function update() {
        const tSpeed = 3 / 1; //units per second
        const rSpeed = 360 / 3; //degrees per second
        const frameTimeInMiliSeconds = f.Loop.timeFrameGame;
        const frameTimeInSeconds = (frameTimeInMiliSeconds / 1000);
        if (f.Keyboard.isPressedOne([f.KEYBOARD_CODE.W]))
            node.mtxLocal.translateZ(tSpeed * frameTimeInSeconds);
        if (f.Keyboard.isPressedOne([f.KEYBOARD_CODE.S]))
            node.mtxLocal.translateZ(-tSpeed * frameTimeInSeconds);
        if (f.Keyboard.isPressedOne([f.KEYBOARD_CODE.A]))
            node.mtxLocal.rotateY(rSpeed * frameTimeInSeconds);
        if (f.Keyboard.isPressedOne([f.KEYBOARD_CODE.D]))
            node.mtxLocal.rotateY(-rSpeed * frameTimeInSeconds);
        viewport.camera.mtxPivot.lookAt(node.mtxWorld.translation);
        viewport.draw();
    }
})(FirstFudge || (FirstFudge = {}));
//# sourceMappingURL=FirstFudge.js.map