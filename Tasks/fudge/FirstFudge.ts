namespace FirstFudge {

    import f = FudgeCore;
    console.log(f);

    window.addEventListener("load", start);

    function start(): void {
        const canvas: HTMLCanvasElement = document.querySelector("canvas")!;

        console.log(canvas);

        const cube: f.Mesh = new f.MeshCube("Cube");
        console.log(cube);

        const camera: f.ComponentCamera = new f.ComponentCamera();
        console.log(camera);

        /*  const branch: f.Node = new f.Node("Node");
         console.log(branch); */

        const node: f.Node = new f.Node("Node2");
        console.log(node);

        const viewport: f.Viewport = new f.Viewport();
        viewport.initialize("viewport", node, camera, canvas);

    }
}
