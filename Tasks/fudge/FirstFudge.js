"use strict";
var FirstFudge;
(function (FirstFudge) {
    var f = FudgeCore;
    console.log(f);
    window.addEventListener("load", start);
    function start() {
        const canvas = document.querySelector("canvas");
        console.log(canvas);
        const cube = new f.MeshCube("Cube");
        console.log(cube);
        const camera = new f.ComponentCamera();
        console.log(camera);
        /*  const branch: f.Node = new f.Node("Node");
         console.log(branch); */
        const node = new f.Node("Node2");
        console.log(node);
        const viewport = new f.Viewport();
        viewport.initialize("viewport", node, camera, canvas);
    }
})(FirstFudge || (FirstFudge = {}));
//# sourceMappingURL=FirstFudge.js.map