namespace FirstFudge {
    import f = FudgeCore;

    window.addEventListener("load", start);


    const node: f.Node = new f.Node("Node");
    let viewport: f.Viewport;


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


        //console.log(node);

        viewport = new f.Viewport();
        viewport.initialize("viewport", node, camera, canvas);


        //console.log(viewport);
        f.Loop.addEventListener(f.EVENT.LOOP_FRAME, update);
        f.Loop.start();


    }

    function update(): void {
        const tSpeed: number = 1 / 1; //units per second
        const rSpeed: number = 360 / 1; //degrees per second
        const frameTimeInMiliSeconds: number = f.Loop.timeFrameGame;
        const frameTimeInSeconds: number = (frameTimeInMiliSeconds / 1000);
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
}