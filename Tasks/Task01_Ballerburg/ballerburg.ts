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


interface Point  {
    x: number,
    y: number,
  };

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

let keyboardFocusAngle:boolean=true;



//set up canvas
const canvas:HTMLCanvasElement=document.getElementsByTagName("canvas")[0];
const ctx:CanvasRenderingContext2D=canvas.getContext("2d")!;







window.addEventListener("load",handleLoad);

function handleLoad(_event:Event):void{

    //disable keyboard sliders & button
    let disabledSlider:HTMLInputElement=<HTMLInputElement>document.getElementById("angle1");
    disabledSlider.disabled=true;
    disabledSlider=<HTMLInputElement>document.getElementById("power1");
    disabledSlider.disabled=true;
    const disabledButton:HTMLButtonElement=<HTMLButtonElement>document.getElementById("shoot1");
    disabledButton.disabled=true;

    //add event listeners
    document.addEventListener("keydown",processKeyboardInput);
   
    
    

    for(let i:number=0;i<=(document.getElementsByTagName("input")).length;i++){
        const slider:HTMLInputElement=document.getElementsByTagName("input")[i];
        slider.onchange=function():void{
            const val:number=Number(slider.value)
            switch(slider.id){
                case "angle2":
                    cannonMouse.angle=val;
                    break;
                case "power2":
                    cannonMouse.power=val;
                    break;
                default:
                    console.log("i dont think this should be happening");
                    break;
            }
            console.log("changed slider with id "+slider.id+ " to value "+slider.value);
        }
       
    }
    newMap();
   

}

function processKeyboardInput(_event:KeyboardEvent):void{
    pressedKey=_event.key;
    const angleslider:HTMLInputElement=<HTMLInputElement>document.getElementById("angle1");
    const powerslider:HTMLInputElement=<HTMLInputElement>document.getElementById("power1");
    if (pressedKey=="w"||pressedKey=="s"){
        keyboardFocusAngle=!keyboardFocusAngle;
        if (keyboardFocusAngle){
            angleslider.style.border ="4px solid red";
            powerslider.style.border="none";
        }
        else{
            angleslider.style.border="none";
            powerslider.style.border="4px solid red";
        }
    }
    else if (pressedKey=="a"){
        if (keyboardFocusAngle){
            angleslider.stepDown();
            cannonKeyboard.angle=Number(angleslider.value);
        }
        else{
            powerslider.stepDown();
            cannonKeyboard.power=Number(powerslider.value);
        }
    }
    else if (pressedKey=="d"){
        if (keyboardFocusAngle){
            angleslider.stepUp();
            cannonKeyboard.angle=Number(angleslider.value);
        }
        else{
            powerslider.stepUp();
            cannonKeyboard.power=Number(powerslider.value);
        }
    }
    else if (pressedKey=="Enter"){
        const shootBtn:HTMLButtonElement=<HTMLButtonElement>document.getElementById("shoot1");
        shootBtn.disabled=false;
        shootBtn.click();
        shootBtn.disabled=true;
    }
    console.log("pressed "+pressedKey)
}



function shoot(_index:number):void{
    if (_index===0){
        console.log("shoot keyboard")
    }
    else{
        console.log("shoot mouse")
    }
}

function displayHelp(_event:MouseEvent):void{
    console.log("display help")
}

function restartGame(_event:MouseEvent):void{
    console.log("restart game")
}






function newMap():void{
     //
    // Make sure canvas size matches CSS size
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;
  
    // Create fixed points for the terrain
    const createTerrainPoints = (): Point[] => {
    const points: Point[] = [];
    
    // Start point (left side)
    points.push({
      x: 0,
      y: canvas.height - 150
    });
    
    // Middle points
    points.push({
      x: canvas.width / 3,
      y: canvas.height - 250 + (Math.random() * 50)
    });
    
    points.push({
      x: canvas.width / 2,
      y: canvas.height - 350 + (Math.random() * 50)
    });
    
    points.push({
      x: (canvas.width / 3) * 2,
      y: canvas.height - 150 + (Math.random() * 50)
    });
    
    // End point (right side)
    points.push({
      x: canvas.width,
      y: canvas.height - 50
    });
    
    return points;
  };
  
  // Draw the terrain
  const drawTerrain = (): void => {
    if (!ctx) return;
    
    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Get terrain points
    const points:Point[] = createTerrainPoints();
    
    // Start drawing
    ctx.beginPath();
    
    // Start from bottom left
    ctx.moveTo(0, canvas.height);
    
    // Draw lines through all points
    points.forEach((_point) => {
      ctx.lineTo(_point.x, _point.y);
    });
    
    // Complete the shape
    ctx.lineTo(canvas.width, canvas.height);
    
    // Fill green
    ctx.fillStyle = 'green';
    ctx.fill();
  };
  
  // Draw initial terrain
  drawTerrain();

  //cannons+elevations
}
  
  