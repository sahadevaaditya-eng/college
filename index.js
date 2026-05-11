setInterval(function(){
    var d = new Date();
   document.querySelector("#clock").innerHTML=`${d.getSeconds()}`;
}, 1000);