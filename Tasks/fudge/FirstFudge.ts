namespace FirstFudge {
    import f = FudgeCore;

    window.addEventListener("load", start);


    const node: f.Node = new f.Node("Node");
    let viewport: f.Viewport;


    let direction: boolean = false;
    let offset: number = 0;

    function start(): void {
        const canvas: HTMLCanvasElement = document.querySelector("canvas")!;
        //console.log(canvas);

        const mesh: f.Mesh = new f.MeshCube("Cube");
        //console.log(mesh);

        const camera: f.ComponentCamera = new f.ComponentCamera();
        //console.log(camera);

        const cmpMesh: f.ComponentMesh = new f.ComponentMesh(mesh);
        node.addComponent(cmpMesh);

        const material: f.Material = new f.Material("Material", f.ShaderLit);
        const cmpMaterial: f.ComponentMaterial = new f.ComponentMaterial(material);
        cmpMaterial.clrPrimary.set(1, 0.4, 0.7, 1);
        node.addComponent(cmpMaterial);


        camera.mtxPivot.translateZ(5);
        camera.mtxPivot.rotateY(180);


        const cpmTransform: f.ComponentTransform = new f.ComponentTransform();
        node.addComponent(cpmTransform);
        node.mtxLocal.translateX(0);

        //console.log(node);

        viewport = new f.Viewport();
        viewport.initialize("viewport", node, camera, canvas);


        //console.log(viewport);
        f.Loop.addEventListener(f.EVENT.LOOP_FRAME, update);
        f.Loop.start();
        f.Time.game.setScale(0.2);

    }

    function update(): void {
        const frameTimeInMiliSeconds: number = f.Loop.timeFrameGame;
        const frameTimeInSeconds: number = (frameTimeInMiliSeconds / 1000);
        const degrees: number = 360 * frameTimeInSeconds;
        const pos: number = 2 * frameTimeInSeconds;

        node.mtxLocal.rotateY(degrees);
        node.mtxLocal.rotateX(degrees);

        if (direction == false) {
            node.mtxLocal.translateX(-pos, false);
            offset -= pos;
            if (offset <= -2) {
                direction = true;
            }
        } else {
            node.mtxLocal.translateX(+pos, false);
            offset += pos;
            if (offset >= 2) {
                direction = false;
            }
        }
        viewport.draw();
    }
}