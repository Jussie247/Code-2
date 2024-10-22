//interfaces&variables

interface Cannon{
    index:number,
    angle:number,
    power:number,
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

let balls:Ball[]=[];

let pressedKey:string="";

let cannonMouse:Cannon={
    index:1,
    angle:45,
    power:50,
    ballInAir:false
};
let cannonKeyboard:Cannon={
    index:0,
    angle:45,
    power:50,
    ballInAir:false
};

const keyboardAngle:HTMLInputElement=<HTMLInputElement>document.getElementById("angle1");
const keyboardPower:HTMLInputElement=<HTMLInputElement>document.getElementById("power1");
const mouseAngle:HTMLInputElement=<HTMLInputElement>document.getElementById("angle2");
const mousePower:HTMLInputElement=<HTMLInputElement>document.getElementById("power2");







window.addEventListener("load",handleLoad);

function handleLoad(_event:Event):void{
    //set up canvas
    const canvas:HTMLCanvasElement=document.getElementsByTagName("canvas")[0];
    const ctx:CanvasRenderingContext2D=canvas.getContext("2d")!;

    //add event listeners
    document.addEventListener("keydown",processKeyboardInput);
   
    for(let i:number=0;i<=(document.getElementsByTagName("button")).length;i++){
        const button:HTMLButtonElement=document.getElementsByTagName("button")[i];
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



function shoot(_event:MouseEvent):void{

}

function displayHelp(_event:MouseEvent):void{

}

function restartGame(_event:MouseEvent):void{

}




for(let i:number=0;i<=(document.getElementsByTagName("input")).length;i++){
    const slider:HTMLInputElement=document.getElementsByTagName("input")[i];
    slider.onchange=function():void{
        const val:number=Number(slider.value)
        switch(slider.id){
            case "angle1":
                cannonKeyboard.angle=val;
                break;
            case "power1":
                cannonKeyboard.power=val;
                break;
            case "angle2":
                cannonMouse.angle=val;
                break;
            case "power2":
                cannonMouse.power=val;
                break;
            default:
                console.log("end my suffering why doesnt the id match");
                break;
        }
        console.log("changed slider with id"+slider.id);
    }
   
}

mouseAngle.onchange=function():void{
    cannonMouse.angle=Number(mouseAngle.value)
    console.log("adjusted slider to value"+mouseAngle.value)
}

mousePower.onchange=function():void{
    cannonMouse.power=Number(mousePower.value)
}

keyboardAngle.onchange=function():void{
    cannonKeyboard.angle=Number(keyboardAngle.value)
}
keyboardPower.onchange=function():void{
    cannonKeyboard.power=Number(keyboardPower.value)
}