var i = 0;
var img = ["9.jpg",  "28.jpg", "31.jpg", "32.jpg", "24.jpg"];
slider();
function slider(){
    document.querySelector("#slideShow").src = "img/"+ img[i];
    i ++;
    if(i == img.length){i = 0;}
    setTimeout(slider, 4000);
}