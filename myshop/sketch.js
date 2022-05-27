var w = 1480;
var h = 1025;
var pantalla = 0; 
var puntaje = 0;

function setup() {
  createCanvas(w, h);
  fondo = loadImage("assets/img/fondo.png");
  inicio = loadImage("assets/img/Inicio.png");
  texto1 = loadImage("assets/img/texto1.png");
  darle = loadImage("assets/img/adarle.png");
  regresar = loadImage("assets/img/regresar.png");
  logo = loadImage("assets/img/logo.png");
  tortuga = loadImage("assets/img/tortuga.png");
  si = loadImage("assets/img/Si.png");
  no = loadImage("assets/img/No.png");
  fraile = loadImage("assets/img/frailejon.png");
  fraile1 = loadImage("assets/img/100.png");
  fraile2 = loadImage("assets/img/300.png");
  para = loadImage("assets/img/paramo.png");
  para1 = loadImage("assets/img/para1.png");
  para2 = loadImage("assets/img/para2.png");
  loro = loadImage("assets/img/loro.png");
  feliz = loadImage("assets/img/feliz.png");
  reclamar = loadImage("assets/img/reclamar.png");
  osovigoroso = loadImage("assets/img/osovigoroso.png");
  ups = loadImage("assets/img/ups.png");
  again = loadImage("assets/img/otravez.png");
  p0 = loadImage("assets/img/0.png");
  p1 = loadImage("assets/img/1.png");
  p2 = loadImage("assets/img/2.png");
  p3 = loadImage("assets/img/3.png");
  p4 = loadImage("assets/img/4.png");
  font = loadFont('assets/fonts/Montserrat-ExtraBold.ttf');
  textFont(font);
  textSize(64);
}
function mousePressed(){
  switch(pantalla){
    case 0:
      if ((mouseX > 764) && (mouseX < 764+350) && (mouseY > 768) && (mouseY < 768+78)){
        pantalla = 1;
       
      }
    break;
    case 1:
      if ((mouseX > 532) && (mouseX < 532+350) && (mouseY > 736) && (mouseY < 736+78)){
        pantalla = 2;
        puntaje++;
      } else if ((mouseX > 955) && (mouseX < 955+350) && (mouseY > 736) && (mouseY < 736+78)){
        pantalla = 6;
      }
      break;
    case 2:
      if ((mouseX > 955) && (mouseX < 955+350) && (mouseY > 736) && (mouseY < 736+78)){
        pantalla = 3;
        puntaje++;
      }else if ((mouseX > 532) && (mouseX < 532+350) && (mouseY > 736) && (mouseY < 736+78)){
        pantalla = 6;
      }
      break;
    case 3:
      if ((mouseX > 955) && (mouseX < 955+350) && (mouseY > 736) && (mouseY < 736+78)){
        pantalla = 4;
        puntaje++;
      }else if ((mouseX > 532) && (mouseX < 532+350) && (mouseY > 736) && (mouseY < 736+78)){
        pantalla = 6;
      }
      break;
    case 4:
      if ((mouseX > 532) && (mouseX < 532+350) && (mouseY > 736) && (mouseY < 736+78)){
        pantalla = 5;
        puntaje++;
      }else if ((mouseX > 955) && (mouseX < 955+350) && (mouseY > 736) && (mouseY < 736+78)){
        pantalla = 6;
      }
      break;
    case 5:
      if ((mouseX > 955) && (mouseX < 955+350) && (mouseY > 736) && (mouseY < 736+78)){
        pantalla = 6;
        puntaje++;
      }else if ((mouseX > 532) && (mouseX < 532+350) && (mouseY > 736) && (mouseY < 736+78)){
        pantalla = 6;
      }
      break;
    case 6:
      if ((mouseX > 950) && (mouseX < 950+350) && (mouseY > 665) && (mouseY < 665+78)){
        pantalla = 0;
        puntaje = 0;
      }
      break;
  }

}

function draw() {
  cursor(ARROW);
  
  switch (pantalla)
{
  case 0:
    imageMode(CORNER);
    image(inicio,0,0,width,height);
    imageMode(CENTER);
    image(texto1,width/2,400);
    imageMode(CENTER);
    image(regresar,540,768);
    image(darle,940,768);
    if ((mouseX > 940) && (mouseX < 940+350) && (mouseY > 768) && (mouseY < 768+78)){
      cursor(HAND);
    } else if ((mouseX > 540) && (mouseX < 540+350) && (mouseY > 768) && (mouseY < 768+78)){
      cursor(HAND);
    }
  break;
  case 1:
  imageMode(CORNER);
  
  image(fondo,0,0,width,height);
  image(logo,113,39);
  fill(255);
  textAlign(CENTER);
  text("¿La Tortuga Carey está en vía de extinsión?",150,202,1155,214);
  imageMode(CENTER);
  switch(puntaje){
    case 0:
      image(p0,width/2,142);
      break;
    case 1:
      image(p1,width/2,142);
      break;
    case 2:
      image(p2,width/2,142);
      break;
    case 3:
      image(p3,width/2,142);
      break;
    case 4:
      image(p4,width/2,142);
      break;
  }
  
  image(tortuga,width/2,500);
  if ((mouseX > 532) && (mouseX < 532+350) && (mouseY > 736) && (mouseY < 736+78)){
    cursor(HAND);
  } else if ((mouseX > 955) && (mouseX < 955+350) && (mouseY > 736) && (mouseY < 736+78)) {
    cursor(HAND);
  }
  if ((mousePressed.mouseX > 532) && (mouseX < 532+350) && (mouseY > 736) && (mouseY < 736+78)){
    cursor(HAND);
  }
  imageMode(CENTER);
  
  image(si,532,736);
  image(no,955,736);
  break;
  case 2:
  imageMode(CORNER);
  
  image(fondo,0,0,width,height);
  image(logo,113,39);
  fill(255);
  textAlign(CENTER);
  text("¿Cuánto tiempo viven los frailejones aproximandamente?",150,190,1155,214);
  imageMode(CENTER);
  switch(puntaje){
    case 0:
      image(p0,width/2,142);
      break;
    case 1:
      image(p1,width/2,142);
      break;
    case 2:
      image(p2,width/2,142);
      break;
    case 3:
      image(p3,width/2,142);
      break;
    case 4:
      image(p4,width/2,142);
      break;
  }
  image(fraile,width/2,500);
  if ((mouseX > 532) && (mouseX < 532+350) && (mouseY > 736) && (mouseY < 736+78)){
    cursor(HAND);
  } else if ((mouseX > 955) && (mouseX < 955+350) && (mouseY > 736) && (mouseY < 736+78)) {
    cursor(HAND);
  }
  if ((mousePressed.mouseX > 532) && (mouseX < 532+350) && (mouseY > 736) && (mouseY < 736+78)){
    cursor(HAND);
  }
  imageMode(CENTER);
  
  image(fraile1,532,736);
  image(fraile2,955,736);
  break;
  case 3:
  imageMode(CORNER);
  
  image(fondo,0,0,width,height);
  image(logo,113,39);
  fill(255);
  textAlign(CENTER);
  text("¿Cuál es el páramo más grande del mundo?",150,190,1155,214);
  imageMode(CENTER);
  switch(puntaje){
    case 0:
      image(p0,width/2,142);
      break;
    case 1:
      image(p1,width/2,142);
      break;
    case 2:
      image(p2,width/2,142);
      break;
    case 3:
      image(p3,width/2,142);
      break;
    case 4:
      image(p4,width/2,142);
      break;
  }
  image(para,width/2,550);
  if ((mouseX > 532) && (mouseX < 532+350) && (mouseY > 736) && (mouseY < 736+78)){
    cursor(HAND);
  } else if ((mouseX > 955) && (mouseX < 955+350) && (mouseY > 736) && (mouseY < 736+78)) {
    cursor(HAND);
  }
  if ((mousePressed.mouseX > 532) && (mouseX < 532+350) && (mouseY > 736) && (mouseY < 736+78)){
    cursor(HAND);
  }
  imageMode(CENTER);
  
  image(para1,532,736);
  image(para2,955,736);
  break;
  case 4:
  imageMode(CORNER);
  
  image(fondo,0,0,width,height);
  image(logo,113,39);
  fill(255);
  textAlign(CENTER);
  text("¿Tener de mascota una Guacamaya es lega?",150,190,1155,214);
  imageMode(CENTER);
  switch(puntaje){
    case 0:
      image(p0,width/2,142);
      break;
    case 1:
      image(p1,width/2,142);
      break;
    case 2:
      image(p2,width/2,142);
      break;
    case 3:
      image(p3,width/2,142);
      break;
    case 4:
      image(p4,width/2,142);
      break;
  }
  image(loro,width/2,550);
  if ((mouseX > 532) && (mouseX < 532+350) && (mouseY > 736) && (mouseY < 736+78)){
    cursor(HAND);
  } else if ((mouseX > 955) && (mouseX < 955+350) && (mouseY > 736) && (mouseY < 736+78)) {
    cursor(HAND);
  }
  if ((mousePressed.mouseX > 532) && (mouseX < 532+350) && (mouseY > 736) && (mouseY < 736+78)){
    cursor(HAND);
  }
  imageMode(CENTER);
  
  image(si,532,736);
  image(no,955,736);
  break;
  case 5:
    imageMode(CORNER);
    image(fondo,0,0,width,height);
    image(logo,113,39);
    fill(255);
    textAlign(CENTER);
    text("¿El Oso de Anteojos es el animal nacional de Colombia?",150,190,1155,214);
    imageMode(CENTER);
    switch(puntaje){
      case 0:
        image(p0,width/2,142);
        break;
      case 1:
        image(p1,width/2,142);
        break;
      case 2:
        image(p2,width/2,142);
        break;
      case 3:
        image(p3,width/2,142);
        break;
      case 4:
        image(p4,width/2,142);
        break;
    }
    image(osovigoroso,width/2,550);
    if ((mouseX > 532) && (mouseX < 532+350) && (mouseY > 736) && (mouseY < 736+78)){
      cursor(HAND);
    } else if ((mouseX > 955) && (mouseX < 955+350) && (mouseY > 736) && (mouseY < 736+78)) {
      cursor(HAND);
    }
    if ((mousePressed.mouseX > 532) && (mouseX < 532+350) && (mouseY > 736) && (mouseY < 736+78)){
      cursor(HAND);
    }
    imageMode(CENTER);
    
    image(si,532,736);
    image(no,955,736);
  break;
  case 6:
    imageMode(CORNER);
    image(fondo,0,0,width,height);
    imageMode(CENTER);
    
    if (puntaje == 5){
      imageMode(CENTER);
      image(feliz,width/2,400);
      imageMode(CENTER);
      image(reclamar,750,665);
      if ((mouseX > 550) && (mouseX < 750+350) && (mouseY > 630) && (mouseY < 665+78)){
        cursor(HAND);
      }
    } else{
      imageMode(CENTER);
      image(ups,width/2,400);
      if ((mouseX > 950) && (mouseX < 950+350) && (mouseY > 665) && (mouseY < 665+78)){
        cursor(HAND);
      } else if ((mouseX > 550) && (mouseX < 550+350) && (mouseY > 665) && (mouseY < 665+78)){
        cursor(HAND);
      }
      imageMode(CENTER);
      image(again,950,665);
      image(regresar,550,665);
    }
  break;
}
  //background(fondo);
  
}