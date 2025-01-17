let currentPage = "confirm";

let inputField, inputField2, inputField3;
let buttonIam, buttonNope, buttonOK, buttonCon, buttonYes, buttonYes2, buttonYes3, buttonYes4, buttonYes5, buttonNext, buttonNext2;
let img1, img2, img3, img4;
let eat1, eat2, eat3, eat4;
let place1, place2, place3, place4, place5, place6;
let animate1, animate2, animate3, animate4, animate5;

function preload() {
  img1 = loadImage('assets/IMG1.jpg');
  img2 = loadImage('assets/IMG3.jpg');
  img3 = loadImage('assets/IMG6.jpg');
  img4 = loadImage('assets/IMG4.jpg');

  eat1 = loadImage('assets/food/sushi.jpeg');
  eat2 = loadImage('assets/food/steak.jpeg');
  eat3 = loadImage('assets/food/pizza.jpeg');
  eat4 = loadImage('assets/food/churros.jpeg');

  animate1 = loadImage('assets/rose.jpg');
  animate2 = loadImage('assets/bubble.jpg');
  animate3 = loadImage('assets/heart2.png');
  animate4 = loadImage('assets/bunny.gif');
  animate5 = loadImage('assets/heartEnvelope.gif');

  place1 = loadImage('assets/activity/minigolf.jpg');
  place2 = loadImage('assets/activity/picnic.jpg');
  place3 = loadImage('assets/activity/arcade.jpg');
  place4 = loadImage('assets/activity/museum.jpg');
  place5 = loadImage('assets/activity/iceskating.jpg');
  place6 = loadImage('assets/activity/cinema.jpg');

}


function setup() {
  createCanvas(windowWidth, windowHeight);

  inputField = createInput();
  inputField.position(windowWidth*0.45, height/2);
  inputField.hide();

  inputField2 = createInput();
  inputField2.position(width*0.4, height*0.2);
  inputField2.hide();

  inputField3 = createInput();
  inputField3.position(width*0.4, height*0.89);
  inputField3.hide();

  buttonIam = new Button("I am", 70, 30, "mail");
  buttonIam.button.position(((windowWidth - 70) /2) -50, (windowHeight - 30) *0.55);
  buttonIam.button.hide();

  buttonNope = new Button("nope", 70, 30, "try");
  buttonNope.button.position(((windowWidth - 70) /2) +40, (windowHeight - 30) *0.55);
  buttonNope.button.hide();

  buttonOK = new Button("Ok", 70, 30, "confirm");
  buttonOK.button.position(((windowWidth - 70) /2), (windowHeight - 30) *0.3);
  buttonOK.button.hide();

  buttonCon = new Button("continue", 80, 30, "home");
  buttonCon.button.position(((windowWidth - 70) /2), (windowHeight - 30) *0.21);
  buttonCon.button.hide();

  buttonYes = new Button("YESSS", 70, 30, "thank");
  buttonYes.button.position(((windowWidth - 70) /2) -50, (windowHeight - 30) *0.8);
  buttonYes.button.hide();

  buttonYes2 = new Button("small yes", 100, 30, "thank");
  buttonYes2.button.position(((windowWidth - 70) /2) +40, (windowHeight - 30) *0.8);
  buttonYes2.button.hide();

  buttonNext = new Button("click me to continue", 200, 25, "date");
  buttonNext.button.position((windowWidth-190)/2, windowHeight*0.57);
  buttonNext.button.hide();

  buttonYes3 = new Button("YES", 100, 30, "Eat");
  buttonYes3.button.position(((windowWidth - 70) /2) +200, (windowHeight - 30) *0.29);
  buttonYes3.button.hide();

  buttonYes4 = new Button("YES", 100, 30, "Eat");
  buttonYes4.button.position(((windowWidth - 70) /2) +200, (windowHeight - 30) *0.392);
  buttonYes4.button.hide();

  buttonYes5 = new Button("YES", 100, 30, "Eat");
  buttonYes5.button.position(((windowWidth - 70) /2) +200, (windowHeight - 30) *0.5);
  buttonYes5.button.hide();

  buttonNext2 = new Button("next...", 80, 30, "Place");
  buttonNext2.button.position(((windowWidth - 80) /2) +140, (windowHeight - 30) *0.2);
  buttonNext2.button.hide();

  buttonEnd = new Button("lets go", 70, 25, "End");
  buttonEnd.button.position(((windowWidth - 80) *0.5) +140, (windowHeight - 30) *0.917);
  buttonEnd.button.hide();
  
}

function draw() {
  background("#fff2d8");
  imageMode(CENTER, CENTER);

  if (currentPage === "confirm") {
    drawConfirmPage();
  } else if (currentPage === "home") {
    drawHomePage();
  } else if (currentPage === "thank") {
    drawThank();
  } else if (currentPage === "try") {
    drawTry();
  } else if (currentPage === "mail") {
    drawMail();
  } else if (currentPage === "date") {
    drawDatePage();
  } else if (currentPage === "Eat") {
    drawEat();
  } else if (currentPage === "Place") {
    drawPlace();
  } else if (currentPage === "End") {
    drawEnd();
  }
}

function drawConfirmPage() {
  textAlign(CENTER, CENTER);
  textSize(50);
  textFont("futura");
  fill("#fccdd3");
  text("Confirm you are Gio's gf...", width/2, height*0.32);

  textSize(30);
  text("what is the name of her bunny?", width/2, height*0.45);

  buttonOK.button.hide();
  inputField.show();

  let answer = "lilo";
  let userInput = inputField.value();

  if (userInput === "lilo") {
    buttonIam.button.show();
  } else {
    buttonNope.button.show();
  }
}



function drawMail() {
  image(animate2, width/2, height/2, img1.width/7, img1.height/9);


  textAlign(CENTER, CENTER);
  textSize(30);
  textFont("futura");
  fill("#fccdd3");
  text("woooo00, i have something to ask you", width/2, height/6);

  inputField.hide();

  buttonIam.button.hide();
  buttonNope.button.hide();

  buttonCon.button.show();

}

function drawTry() {
  textAlign(CENTER, CENTER);
  textSize(50);
  textFont("futura");
  fill("#fccdd3");
  text("...try again", width/2, height/6);

  buttonIam.button.hide();
  buttonNope.button.hide();

  buttonOK.button.show();
}



function drawHomePage() {
  image(animate1, width/2, height/2, img1.width/7, img1.height/9);

  let textContent = "Will You Be My Valentine?";
  let x = width/2;
  let y = height/6;

  textAlign(CENTER, CENTER);
  textSize(50);
  textFont("futura");
  fill("#fccdd3");
  text(textContent, x, y);

  let textWidthValue = textWidth(textContent);

  let underlineY = y + 20;
  stroke("#fccdd3");
  strokeWeight(2);
  line(x - textWidthValue/2, underlineY, x + textWidthValue /2, underlineY);

  buttonCon.button.hide();

  buttonYes.button.show();
  buttonYes2.button.show();
}

function drawThank() {
  image(img1, width*0.3, height*0.38, img1.width/13, img1.height/13);
  image(img2, width*0.7, height*0.38, img2.width/13, img2.height/13);
  image(img3, width*0.3, height*0.78, img3.width/15, img3.height/15);
  image(img4, width*0.7, height*0.78, img4.width/13, img4.height/13);

  image(animate3, width/2, height*0.5, img4.width/13, img4.height/13);
  image(animate3, width/2, height*0.3, img4.width/13, img4.height/13);
  image(animate3, width/2, height*0.7, img4.width/13, img4.height/13);
  image(animate3, width/2, height*0.9, img4.width/13, img4.height/13);

  textAlign(CENTER, CENTER);
  textSize(50);
  textFont("futura");
  fill("#fccdd3");
  text("Thank youuu!", width/2, height*0.1);
  textSize(30);
  text("here's to usssssss", width/2, height*0.17)

  buttonYes.button.hide();
  buttonYes2.button.hide();

  buttonNext.button.show();

}

function drawDatePage() {

  image(animate4, width/2, height*0.7, img4.width/13, img4.height/15);

  textAlign(CENTER, CENTER);
  textSize(50);
  textFont("futura");
  fill("#fccdd3");
  text("Are you free on??", width/2, height*0.2);
  textAlign(LEFT, CENTER);
  textSize(30);
  text("> Friday 14th, February 2025 :", 60, height*0.3)
  text("> Saturday 15th, February 2025 :", 60, height*0.4)
  text("> BOTH DAYS!!:", 60, height*0.5)

  buttonNext.button.hide();

  buttonYes3.button.show();
  buttonYes4.button.show();
  buttonYes5.button.show();

}

function drawEat() {
  image(eat1, width*0.3, height*0.4, eat1.width/3, eat1.height/3);
  text("1.", width*0.15, height*0.5);

  image(eat2, width*0.7, height*0.4, eat2.width/4, eat2.height/4.5);
  text("2.", width*0.55, height*0.5);

  image(eat3, width*0.3, height*0.76, eat3.width/4, eat3.height/4);
  text("3.", width*0.15, height*0.85);

  image(eat4, width*0.7, height*0.78, eat4.width/3.5, eat4.height/4);
  text("4.", width*0.55, height*0.85);

  textAlign(CENTER, CENTER);
  textSize(45);
  textFont("futura");
  fill("#fccdd3");
  text("What do you want to eat shawty??", width/2, height*0.15);

  buttonYes3.button.hide();
  buttonYes4.button.hide();
  buttonYes5.button.hide();

  buttonNext2.button.show();


  inputField2.show();
  let eatAnswer = inputField2.value();

}

function drawPlace() {

  textAlign(CENTER, CENTER);
  textSize(35);
  textFont("futura");
  fill("#fccdd3");
  text("what do you wanna do after/before babi mou?", width/2, height*0.1);


  textSize(20);
  image(place1, width*0.2, height*0.3, place1.width/5.5, place1.height/5.5);
  text("mini golf?", width*0.2, height*0.45);

  image(place2, width*0.2, height*0.65, place2.width/5, place2.height/5);
  text("picnic?", width*0.2, height*0.78);

  image(place3, width*0.5, height*0.3, place3.width/5, place3.height/5);
  text("arcade?", width*0.5, height*0.46);

  image(place4, width*0.5, height*0.68, place4.width/5, place4.height/5);  text("museum?", width*0.5, height*0.835);

  image(place5, width*0.8, height*0.3, place5.width/4.5, place5.height/4.5);
  text("iceskating?", width*0.8, height*0.445);

  image(place6, width*0.8, height*0.68, place6.width/4.5, place6.height/4.5);
  text("cinema?", width*0.8, height*0.825);

  textSize(15);
  text("(type activity)", width*0.5, height*0.87);

  inputField2.hide();
  buttonNext2.button.hide();

  buttonEnd.button.show();

  inputField3.show();
  let answerActivity = inputField3.value();
}

function drawEnd() {

  image(animate5, width/2, height*0.5, animate5.width, animate5.height);


  textAlign(CENTER, CENTER);
  textSize(40);
  textFont("futura");
  fill("#fccdd3");
  text("Thank you for being the best girlfriend!!", width/2, height*0.25);
  textSize(30);
  text("- love Gio xx", width/2, height*0.77);


  inputField3.hide();
  buttonEnd.button.hide();

}