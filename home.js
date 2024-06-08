/*=====Circle=====*/
var circle = document.getElementById("circle");
var upBtn = document.getElementById("upBtn");
var downBtn = document.getElementById("downBtn");

var rotateValue = circle.style.transform;
var rotateSum;

upBtn.onclick = function()
{
    rotateSum = rotateValue + "rotate(-90deg)";
    circle.style.transform = rotateSum;
    rotateValue = rotateSum;
    
}
downBtn.onclick = function()
{
    rotateSum = rotateValue + "rotate(90deg)";
    circle.style.transform = rotateSum;
    rotateValue = rotateSum;
}
/*========= circle image change===============*/

var mobile = document.querySelector('.mobile');
var images =['seventeen-group.jpeg', 'vocal.webp', 'hiphop.jpeg', 'performance.webp'];
var i =0;

function prev(){
    if(i <=0) i = images.length;
    i--;
    return setImg()
}

function next(){
    if(i >=images.length-1)i=-1;
    i++;
    return setImg();
}
function setImg(){
    return mobile.setAttribute('src', 'assets/' + images[i]);
}



