const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    // create getBackgroundImg( ) here
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
 
    Engine.update(engine);

    // write code to display time in correct format here


}

async function getBackgroundImg(){

    var responseJSON = await response.json();
    var dateTime = responseJSON.datetime;
    // write code to fetch time from API

    //change the data in JSON format

    // write code slice the datetime
hour = datetime.slice(11,13);

    // add conditions to change the background images from sunrise to sunset
    
    if(hour>=04 && hour<=06 ){
        bg ="sunrise1.png";
    }else if(hour>=06 && hour<=08){
      bg ="surprise2.png";
    }else(hour>=23 && hour<=0)
      bg="sunset10,png";
    } (hour>=0 && hour<=03)
     bg="sunset11.png";
    
    bg ="sunset12.png";
  

  
  

    //load the image in backgroundImg variable here
  backgroundImg = loadImage(bg);


