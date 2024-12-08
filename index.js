var randomNumber1 = Math.floor((Math.random() * 6) + 1);
var randomNumber2 = Math.floor((Math.random() * 6) + 1);

//set the image based on random number
document.querySelector(".img1").setAttribute("src",`./images/dice${randomNumber1}.png`);
document.querySelector(".img2").setAttribute("src",`./images/dice${randomNumber2}.png`);

//change the winner title

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Win 🎲"
}else if(randomNumber1< randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 Win 🎲"  
}
else{
    document.querySelector("h1").innerHTML = "Draw 🎲"
}