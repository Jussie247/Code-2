namespace FirstFudge {
    import f = FudgeCore;

    window.addEventListener("load", start);


    const node: f.Node = new f.Node("Node");
    const groundNode: f.Node = new f.Node("NodeGround");

    let viewport: f.Viewport;


    function start(): void {
        const canvas: HTMLCanvasElement = document.querySelector("canvas")!;

        //Car
        const mesh: f.Mesh = new f.MeshCube("Cube");

        const cmpMesh: f.ComponentMesh = new f.ComponentMesh(mesh);
        cmpMesh.mtxPivot.translateY(0.5);
        cmpMesh.mtxPivot.scaleZ(4);
        node.addComponent(cmpMesh);

        const material: f.Material = new f.Material("Material", f.ShaderLit);
        const cmpMaterial: f.ComponentMaterial = new f.ComponentMaterial(material);
        cmpMaterial.clrPrimary.set(1, 0.4, 0.7, 1);
        node.addComponent(cmpMaterial);

        const cpmTransform: f.ComponentTransform = new f.ComponentTransform();
        node.addComponent(cpmTransform);


        //Ground
        const groundMesh: f.Mesh = new f.MeshQuad("Ground");

        const cmpGround: f.ComponentMesh = new f.ComponentMesh(groundMesh);
        cmpGround.mtxPivot.rotateX(-90, true);
        cmpGround.mtxPivot.scaleY(50);
        cmpGround.mtxPivot.scaleX(50);
        groundNode.addComponent(cmpGround);

        const groundMaterial: f.Material = new f.Material("Ground Material", f.ShaderLitTextured);
        const cmpGroundMaterial: f.ComponentMaterial = new f.ComponentMaterial(groundMaterial);
        groundNode.addComponent(cmpGroundMaterial);
        groundNode.addChild(node);


        const camera: f.ComponentCamera = new f.ComponentCamera();

        camera.mtxPivot.translateZ(15);
        camera.mtxPivot.translateY(15);
        /*   camera.mtxPivot.rotateY(180);
          camera.mtxPivot.rotateX(45); */

        viewport = new f.Viewport();
        viewport.initialize("viewport", groundNode, camera, canvas);


        //console.log(viewport);
        f.Loop.addEventListener(f.EVENT.LOOP_FRAME, update);
        f.Loop.start();


    }

    function update(): void {
        const tSpeed: number = 3 / 1; //units per second
        const rSpeed: number = 360 / 3; //degrees per second
        const frameTimeInMiliSeconds: number = f.Loop.timeFrameGame;
        const frameTimeInSeconds: number = (frameTimeInMiliSeconds / 1000);
        const degrees: number = 360 * frameTimeInSeconds;

        //node.mtxLocal.translateX(1.0);
        node.mtxLocal.rotateY(degrees);
        //node.mtxLocal.rotateZ(-3);
        node.mtxLocal.rotateX(degrees);

        viewport.draw();
    }
}