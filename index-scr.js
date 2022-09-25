var heading = document.querySelector("#heading");

heading.onclick = function () {
  heading.style.color = "red";
}

var name=prompt("Who the f**k are you?");

if(name=="김규진" || name=="규진")
{
  alert("넌 꺼져")
}
else{
  alert("오~ " + name + "! 어서와!");
}

