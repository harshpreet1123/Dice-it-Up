
function rand() {

var rand1=Math.floor(Math.random()*6)+1;

var randimg1="dice"+rand1+".png";

var radimgsrc1="Images/"+randimg1;


var rand2=Math.floor(Math.random()*6)+1;

var randimg2="dice"+rand2+".png";

var radimgsrc2="Images/"+randimg2;

document.querySelectorAll("img")[0].setAttribute("src",radimgsrc1);

document.querySelectorAll("img")[1].setAttribute("src",radimgsrc2);

if(rand1>rand2)
{
  document.querySelector("h2").innerHTML="🚩PLAYER 1 WINS🚩";
}
else if (rand1===rand2)
{
  document.querySelector("h2").innerHTML="DRAW";
}
else
{
  document.querySelector("h2").innerHTML="🚩PLAYER 2 WINS🚩";
}
}
rand();
