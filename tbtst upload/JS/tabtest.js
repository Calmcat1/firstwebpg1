

function tabOpener(Pgname,color,elmnt){

let tablinks, tabcontent, i;

//removes elements
tabcontent = document.getElementsByClassName("tabcontent");

for(i=0; i<tabcontent.length ; i++){
  tabcontent[i].style.display = "none"

}

//removes bg color
tablinks = document.getElementsByClassName("tablinks")

for(i=0; i<tablinks.length; i++){
  tablinks[i].style.backgroundColor = ""
}

//setbtn color
elmnt.style.backgroundColor = color;

//show elements 
document.getElementById(Pgname).style.display = "block";


//sets color
document.getElementById(Pgname).style.backgroundColor= `${color}`

}