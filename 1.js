var buttonaccess=document.getElementById("btn");

var count=0;
function counter(){
    count++;
    console.log(count ,' clicks')
}
buttonaccess.addEventListener('click',counter);

document.addEventListener('keydown',function(event) {
    console.log('key pressed' ,event.keyCode);
});