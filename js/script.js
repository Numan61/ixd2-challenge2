 function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
   // m = checkTime(m);
  //  s = checkTime(s);
    document.getElementById('tijd').innerHTML =
    h + ":" + m + ":"  + s;
    var t = setTimeout(startTime, 500);
}


function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}


var t = new Date().getHours();
//document.getElementById('achtergrond').innerHTML = t;
if (t < 6) {
    document.body.style.backgroundColor="black"; // Hier staat de if else statement waarbij 
} else if (t >= 7 && t < 12) {
    document.body.style.backgroundImage ="url('img/ochtend.jpg')";
     document.body.style.backgroundRepeat="no-repeat";
     document.body.style.backgroundSize="cover";
     document.body.style.backgroundColor="#848484"; 
   // console.log('trshgdcdhcsc');
} 
 else if (t >= 12 && t < 18) {
    document.body.style.backgroundImage="url('img/middag.jpg')";
      document.body.style.backgroundRepeat="no-repeat";
     document.body.style.backgroundSize="cover";
      document.body.style.backgroundColor="#848484";
}
 else if (t >= 18 && t < 23) {
    document.body.style.background="url('img/avond.jpg')";
    document.body.style.backgroundRepeat="no-repeat";
     document.body.style.backgroundSize="cover";
     document.body.style.backgroundColor="#494949";
}
else {
    document.write("Have a good night!");
    document.body.style.backgroundColor="grey";
}

