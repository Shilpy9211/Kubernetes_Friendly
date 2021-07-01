
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function k8s_cmd(){

  var i = document.getElementById("in1").value;

  alert("i");
  
  var xhr = new XMLHttpRequest();
  
  xhr.open("GET" , "http://192.168.56.103/cgi-bin/backend.py?x="+i,true);
  
  xhr.send();
  
  xhr.onload = function (){
    var output = xhr.responseText;
    document.getElementById("d1").innerHTML = output;
  }
  
  }
 

  
