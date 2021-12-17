function preload() {
    img=loadImage('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZS8ChsL9wr2BgNJbCnyn1i9rNddPGyspkxA&usqp=CAU');
    }
    
    function setup() {
    createCanvas(750,750);
    }
    
    function draw() {
    image(img,220,150,200,200);
    stroke('black');
    fill('#FF00D0');
    rect(90, 40, 460, 20); 
    rect(90, 420, 460, 20); 
    rect(40, 90, 20, 300);
     rect(580, 90, 20, 300); 


     circle(50, 50, 80);
      circle(50, 430, 80); 
      circle(590, 50, 80);
       circle(590, 430, 80);
    }
    