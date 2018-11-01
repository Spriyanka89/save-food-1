var image1;
var image2;
var image3;
var image4;
var image5;
var image6;
var image7;
var image8;
var image9;
var image10;
var image11;
var image12;
var image13;
var image14;
var image15;

var screen=0;

function preload() {
  image1 = loadImage("1.png ");
  image2 = loadImage("2.png");
  image3 = loadImage("3.png");
  image4 = loadImage("4_1.png");
  image5 = loadImage("5.png");
  image6 = loadImage("6.png");
  image7 = loadImage("7.png");
  image8 = loadImage("7_2.png");
  image9 = loadImage("8_2.png");
  image10 = loadImage("8.2.1.png");
    image11 = loadImage("8.2.2.png");
    image12 = loadImage("8.2.3.png");

  image13 = loadImage("9.png");
image14 = loadImage("13.png");

image15 = loadImage("12.png");
}

function setup() {
  createCanvas(700, 1200)
}




function draw() {
//login screen//
  if (screen === 0) {
    image(image1, 50, 10);
    //fill(200);
    //rect (130,790,450,70);
    if (mouseIsPressed) {
      if (mouseX>120 && mouseX<580 && mouseY>780 && mouseY<860) {
        screen++;
      }
    }
  }



//home screen//
  if (screen === 1) {

    image(image2, 50, 10);

  //  fill(200, 90, 80, 90);
  //  rect (170, 420, 350, 70);

    if (mouseIsPressed)
    {
      if (mouseX>170 && mouseX<530 && mouseY>420 && mouseY<500) {
        screen++;
      }
    }

    //line(0,535,700,535);
    //line(0,615,700,615);
    //line(170,0,170,1200);
    //line(530,0,530,1200);

    //line(20,660,630,660);

    //line(20,735,630,735);
    //line(20,780,630,780);
    //line(20,855,630,855);
    //line(20,890,630,890);
    //line(20,965,630,965);


  }






// scan your bill//
  if (screen === 2) {

    image(image3, 50, 10);
    //fill(200, 90, 80, 90);
    //rect (170, 400, 170, 50);


    if (mouseIsPressed) {
      if (mouseX>150 && mouseX<350 && mouseY>400 && mouseY<460) {
        screen++;
      }
//270-350,400-460
    }
  }


//take a pic//
  if (screen === 3) {

    image(image4, 50, 10);
    //fill(200, 90, 80, 90);
    //ellipse (320, 710, 50, 50);

    if (mouseIsPressed) {
      if (mouseX>270 && mouseX<350 && mouseY>70 && mouseY<760) {
        screen++;
      }
    }
  }
//items purchased//
  if (screen === 4) {
    image(image5, 50, 10);
    //fill(255, 0, 0, 255);
    //ellipse(84, 710, 20, 20);

    if (mouseIsPressed) {
      if (mouseX>75 && mouseX<110 && mouseY>700 && mouseY<740) {
        screen++;
      }
    }
  }










// new  adding directly to expire soon tab //
if (screen === 9) {
  image(image6, 50, 10);
  //line(20,925,630,925);
  //line(20,975,630,975);
}

//recipe suggestion image//
if (screen === 10) {
  image(image7, 50, 10);

}
// complete recipe image//
if (screen === 11) {
  image(image8, 50, 10);

}
//problem not visible//
if (screen === 12) {
  image(image9, 50, 10);

//  line(100,440,630,440);
  //line(100,525,630,525);


  //line(100,610,630,610);
//  line(100,700,630,700);
}


if (screen === 13) {
  image(image10, 50, 10);


  //line(100,325,630,325);
  //line(100,420,630,420);

//line(100,520,630,520);
  //line(100,620,630,620);

}


if (screen === 14) {
  image(image11, 50, 10);

}



if (screen === 15) {
  image(image12, 50, 10);

}

if (screen === 16) {
  image(image13, 50, 10);

}

if (screen === 17) {
  image(image14, 50, 10);

}

if (screen === 18) {
  image(image15, 50, 10);

}



}

// expiring tab //
function mousePressed(){
if (screen === 1) {
  if (mouseX>170 && mouseX<530 && mouseY>530 && mouseY<615) {
    screen=9;

//line to locate the position//

  }

}
// near to expire items//

if (screen === 9) {
if (mouseX>80 && mouseX<285 && mouseY>920 && mouseY<980) {
    screen=10;}}

//donate//

    if (screen === 9) {
    if (mouseX>350 && mouseX<485 && mouseY>920 && mouseY<980) {
        screen=12;}
      }


if (screen === 10) {
  if (mouseX>20 && mouseX<340 && mouseY>170 && mouseY<430) {
    screen=11;}
  }


   //problem in showing the screen
//pickup
  if (screen === 12) {
  if (mouseX>350 && mouseX<485 && mouseY>920 && mouseY<980) {
      screen=13;}
    }

    if (screen === 13) {
    if (mouseX>100 && mouseX<600 && mouseY>520 && mouseY<630) {
        screen=14;}
      }


      if (screen === 13) {
      if (mouseX>150 && mouseX<650 && mouseY>320 && mouseY<430) {
          screen=15;}
        }

//}



//account//
//function mousePressed(){
if (screen === 1) {
  if (mouseX>100 && mouseX<500 && mouseY>775 && mouseY<860) {
    screen=16;


}}

///nutrition data//
if (screen === 1) {
  if (mouseX>110 && mouseX<510 && mouseY>655 && mouseY<740) {
    screen=17;


}}

//challenge friend//

if (screen === 1) {
  if (mouseX>100 && mouseX<500 && mouseY>890 && mouseY<970) {
    screen=18;


}}




}
