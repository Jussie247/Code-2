namespace SolarsystemFudge {
    export import f = FudgeCore;

    window.addEventListener("load", start);


    const sun: f.Node = new f.Node("Sun");
    let viewport: f.Viewport;


    function start(): void {
        const canvas: HTMLCanvasElement = document.querySelector("canvas")!;
        const camera: f.ComponentCamera = new f.ComponentCamera();

        camera.mtxPivot.translateZ(15);
        camera.mtxPivot.translateY(15);
        /*   camera.mtxPivot.rotateY(180);
          camera.mtxPivot.rotateX(45); */

        viewport = new f.Viewport();
        viewport.initialize("viewport", sun, camera, canvas);


        //console.log(viewport);
        f.Loop.addEventListener(f.EVENT.LOOP_FRAME, update);
        f.Loop.start();


    }

    function update(): void {
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
}