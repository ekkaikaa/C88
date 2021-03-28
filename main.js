var canvas= new fabric.Canvas("myCanvas");

player_x = 10;
player_y = 10;
block_image_width = 30;
block_image_height = 30;
var player_object = "";

function player_update() {
    fabric.Image.fromURL("player.png",function(Img) {
        player_object = Img;
        //player_object.scaletoWidth(150);
        //player_object.scaletoHeight(140);
        player_object.set({
            top: player_y, 
            left: player_x
        });
        canvas.add(player_object);
    });
}
player_update();

function new_image(get_image){
    fabric.Image.fromURL(get_image,function(img) {
        block_image_object = img;
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            top: player_y, 
            left: player_x
        });
        canvas.add( block_image_object);
    });
}

window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keypressed = e.keyCode;
    console.log(keypressed);
    if(e.shiftKey && keypressed == '77'){
        console.log("M & shift key has been pressed");
        block_image_width = block_image_width - 10;
        block_image_height = block_image_height - 10;
        if(block_image_width < 30){
            block_image_width = 30;
            block_image_height = 30
        }
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
    }
    if(e.shiftKey && keypressed == '80'){
        console.log("P & shift key has been pressed");
        block_image_width = block_image_width + 10;
        block_image_height = block_image_height + 10;
        if(block_image_width > 100){
            block_image_width = 100;
            block_image_height = 100;}
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
    }
    if(keypressed == '38'){
        up();
        console.log("Up key pressed");
    }
    if(keypressed == '40'){
        down();
        console.log("Down key pressed");
    }
    if(keypressed == '37'){
        left();
        console.log("Left key pressed");
    }
    if(keypressed == '39'){
        right();
        console.log("Right key pressed");
    }
    if(keypressed == '70'){
        new_image("ironman_face.png");
        console.log("f key pressed");
    }
    if(keypressed == '66'){
        new_image("spiderman_body.png");
        console.log("b key pressed");
    }
    if(keypressed == '76'){
        new_image("hulk_legs.png");
        console.log("l key pressed");
    }
    if(keypressed == '82'){
        new_image("thor_right_hand.png");
        console.log("r key pressed");
    }
    if(keypressed == '72'){
        new_image("captain_america_left_hand.png");
        console.log("h key pressed");
    }
}

function up() {
    if(player_y >= 0){
        player_y = player_y-block_image_height;
        console.log("block image height = " + block_image_height);
        console.log("when up arrow is pressed, x = " + player_x + " y = " + player_y);
        canvas.remove(player_object); 
        player_update(); 
    }
}

function down() {
    if(player_y <= 450){
        player_y = player_y+block_image_height;
        console.log("block image height = " + block_image_height);
        console.log("when down arrow is pressed, x = " + player_x + " y = " + player_y);
        canvas.remove(player_object); 
        player_update(); 
    }
}

function left() {
    if(player_x >= 0){
        player_x = player_x-block_image_width;
        console.log("block image height = " + block_image_width);
        console.log("when left arrow is pressed, x = " + player_x + " y = " + player_y);
        canvas.remove(player_object); 
        player_update(); 
    }
}

function right() {
    if(player_x <= 850){
        player_x = player_x+block_image_width;
        console.log("block image width = " + block_image_width);
        console.log("when down arrow is pressed, x = " + player_x + " y = " + player_y);
        canvas.remove(player_object); 
        player_update(); 
    }
}

function remove_image(get_image) {
 canvas.remove(get_image);
}