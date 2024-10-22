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

const keyboardAngle:HTMLElement=document.getElementById("angle1")!;




window.addEventListener("load",handleLoad);

function handleLoad(_event:Event):void{
    //set up canvas
    const canvas:HTMLCanvasElement=document.getElementsByTagName("canvas")[0];
    const ctx:CanvasRenderingContext2D=canvas.getContext("2d")!;

    //add event listeners
    document.addEventListener("keydown",processKeyboardInput);
    for(let i:number=0;i<=(document.getElementsByTagName("input")).length;i++){
        const slider:HTMLInputElement=document.getElementsByTagName("input")[i];
        switch(slider.id){
            case "angle1":
                slider.oninput=handleSlider();
                break;
            case "How to Play":
                button.addEventListener("click",displayHelp);
                break;
            case "Restart":
                button.addEventListener("click",restartGame);
                break;
            default:
                console.log("extra button????????");
                break;
        }
    }
    for(let i:number=0;i<=(document.getElementsByTagName("button")).length;i++){
        const button:HTMLElement=document.getElementsByTagName("button")[i];
        switch(button.innerHTML){
            case "Shoot":
                button.addEventListener("click",shoot);
                break;
            case "How to Play":
                button.addEventListener("click",displayHelp);
                break;
            case "Restart":
                button.addEventListener("click",restartGame);
                break;
            default:
                console.log("extra button????????");
                break;
        }
    }

}

function processKeyboardInput(_event:KeyboardEvent):void{
    pressedKey=_event.key;
}

function handleSlider(_event:InputEvent,):void{
    const target:EventTarget=_event.currentTarget!;
    

}

function shoot(_event:MouseEvent):void{

}

function displayHelp(_event:MouseEvent):void{

}

function restartGame(_event:MouseEvent):void{

}

keyboardAngle.onchange=function keyboardAngleChange():void{
    keyboardAngle.
}