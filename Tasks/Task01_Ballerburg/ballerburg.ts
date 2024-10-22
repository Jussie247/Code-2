//interfaces&variables

interface Cannon{
    index:number,
    angle:number,
    gunpowder:number,
    ballInAir:boolean
}

interface Ball{
    shotByCannon:number,
    startingAngle:number,
    gunpowder:number,
    oldPosX:number,
    newPosX:number,
    oldPosY:number,
    newPosY:number
}

let pressedKey:string="";

let cannonMouse:Cannon;
let cannonKeyboard:Cannon;



window.addEventListener("load",handleLoad);

function handleLoad(_event:Event):void{
    //set up canvas
    const canvas:HTMLCanvasElement=document.getElementsByTagName("canvas")[0];
    const ctx:CanvasRenderingContext2D=canvas.getContext("2d")!;

    //add event listeners
    document.addEventListener("keydown",processKeyboardInput);
    
}

function processKeyboardInput(_event:KeyboardEvent):void{
    pressedKey=_event.key;
}
