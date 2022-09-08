circley = 50;
circlex = 50;
speed = 5;
radius = 50;
hasHitx = false;
hasHity = false;

function setup() {
    createCanvas(windowWidth, windowHeight);
    
  }
  
  function draw() {
    background(220);

    fill(255,0,0);
    circle(circlex,circley,radius*2);
   

    if (!hasHitx) {
        circley += speed;
        circlex += speed;
    } else if (hasHitx){
        circley -= speed;
        circlex += speed;
    } 
    if (hasHity) {
        circley += speed;
        circlex -= speed;
    } 

    if (circley == windowHeight - radius) {
        hasHitx = true;
    } else if (circley < windowHeight) {
        hasHitx = false;
    } 
    
    if (circlex == windowWidth-radius) {
        hasHity = true;
    } else if (circley == windowHeight) {
        hasHity = false;
    }

    // if (circlex == windowWidth - radius) {
    //     hasHitx = true;
    // } 
    // else if (circlex == windowHeight - radius) {
    //     hasHitx = false;
    // }

    // if (circley == windowHeight - radius || circley == 0 + radius) {
    //     speed *= -1;
    // } 

  }